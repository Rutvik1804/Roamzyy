import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

interface Preloader3DProps {
  onComplete: () => void;
}

// Easing function for smooth deceleration
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const easeOutCubic = (t: number): number => {
  return 1 - Math.pow(1 - t, 3);
};

const Preloader3D = ({ onComplete }: Preloader3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const [showBrand, setShowBrand] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const animationRef = useRef<number | null>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    globe: THREE.Mesh;
    airplane: THREE.Group;
    orbitGroup: THREE.Group;
  } | null>(null);

  // Create procedural commercial airplane
  const createAirplane = useCallback((): THREE.Group => {
    const airplane = new THREE.Group();

    // Materials
    const whiteMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.2,
      roughness: 0.5,
    });

    const accentMaterial = new THREE.MeshStandardMaterial({
      color: 0x3564af,
      metalness: 0.3,
      roughness: 0.4,
    });

    const windowMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a3a6a,
      metalness: 0.9,
      roughness: 0.1,
    });

    const engineMaterial = new THREE.MeshStandardMaterial({
      color: 0xc0c0c0,
      metalness: 0.7,
      roughness: 0.3,
    });

    // === FUSELAGE (long cylindrical body) ===
    const fuselageLength = 2.0;
    const fuselageRadius = 0.15;
    const fuselageGeometry = new THREE.CylinderGeometry(fuselageRadius, fuselageRadius, fuselageLength, 24);
    fuselageGeometry.rotateZ(Math.PI / 2);
    const fuselage = new THREE.Mesh(fuselageGeometry, whiteMaterial);
    fuselage.castShadow = true;
    airplane.add(fuselage);

    // === NOSE CONE (smooth tapered front) ===
    const noseGeometry = new THREE.SphereGeometry(fuselageRadius, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
    noseGeometry.rotateZ(-Math.PI / 2);
    const nose = new THREE.Mesh(noseGeometry, whiteMaterial);
    nose.position.x = fuselageLength / 2;
    nose.castShadow = true;
    airplane.add(nose);

    // === COCKPIT WINDOWS ===
    const cockpitGeometry = new THREE.BoxGeometry(0.12, 0.06, 0.18);
    const cockpit = new THREE.Mesh(cockpitGeometry, windowMaterial);
    cockpit.position.set(0.9, 0.1, 0);
    airplane.add(cockpit);

    // === TAIL CONE (tapered rear) ===
    const tailConeGeometry = new THREE.ConeGeometry(fuselageRadius, 0.4, 24);
    tailConeGeometry.rotateZ(Math.PI / 2);
    const tailCone = new THREE.Mesh(tailConeGeometry, whiteMaterial);
    tailCone.position.x = -fuselageLength / 2 - 0.2;
    tailCone.castShadow = true;
    airplane.add(tailCone);

    // === MAIN WINGS (swept back, commercial airliner style) ===
    const wingSpan = 1.8;
    const wingChordRoot = 0.5; // width at body
    const wingChordTip = 0.2; // width at tip
    const wingThickness = 0.03;
    const sweepAngle = 0.3; // how far back the wing tip is

    // Wing shape (top view) - swept back trapezoid
    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 0); // leading edge at root
    wingShape.lineTo(wingChordRoot, 0); // trailing edge at root
    wingShape.lineTo(wingChordTip + sweepAngle, wingSpan / 2); // trailing edge at tip
    wingShape.lineTo(sweepAngle, wingSpan / 2); // leading edge at tip  
    wingShape.lineTo(0, 0);

    const wingExtrudeSettings = {
      depth: wingThickness,
      bevelEnabled: false,
    };

    const wingGeometry = new THREE.ExtrudeGeometry(wingShape, wingExtrudeSettings);

    // Left wing
    const leftWing = new THREE.Mesh(wingGeometry, whiteMaterial);
    leftWing.rotation.x = Math.PI / 2;
    leftWing.position.set(-0.1, -wingThickness / 2, 0);
    leftWing.castShadow = true;
    airplane.add(leftWing);

    // Right wing (mirrored)
    const rightWingShape = new THREE.Shape();
    rightWingShape.moveTo(0, 0);
    rightWingShape.lineTo(wingChordRoot, 0);
    rightWingShape.lineTo(wingChordTip + sweepAngle, -wingSpan / 2);
    rightWingShape.lineTo(sweepAngle, -wingSpan / 2);
    rightWingShape.lineTo(0, 0);

    const rightWingGeometry = new THREE.ExtrudeGeometry(rightWingShape, wingExtrudeSettings);
    const rightWing = new THREE.Mesh(rightWingGeometry, whiteMaterial);
    rightWing.rotation.x = Math.PI / 2;
    rightWing.position.set(-0.1, -wingThickness / 2, 0);
    rightWing.castShadow = true;
    airplane.add(rightWing);

    // === VERTICAL STABILIZER (tall tail fin) ===
    const vStabHeight = 0.45;
    const vStabShape = new THREE.Shape();
    vStabShape.moveTo(0, 0);
    vStabShape.lineTo(0.35, 0);
    vStabShape.lineTo(0.15, vStabHeight);
    vStabShape.lineTo(-0.05, vStabHeight);
    vStabShape.lineTo(0, 0);

    const vStabGeometry = new THREE.ExtrudeGeometry(vStabShape, {
      depth: 0.025,
      bevelEnabled: false,
    });

    const verticalStab = new THREE.Mesh(vStabGeometry, whiteMaterial);
    verticalStab.rotation.x = Math.PI / 2;
    verticalStab.rotation.y = Math.PI / 2;
    verticalStab.position.set(-0.95, fuselageRadius, 0.012);
    verticalStab.castShadow = true;
    airplane.add(verticalStab);

    // Tail fin accent stripe
    const finAccentShape = new THREE.Shape();
    finAccentShape.moveTo(0.05, 0.2);
    finAccentShape.lineTo(0.25, 0.2);
    finAccentShape.lineTo(0.15, vStabHeight - 0.05);
    finAccentShape.lineTo(0, vStabHeight - 0.05);
    finAccentShape.lineTo(0.05, 0.2);

    const finAccentGeometry = new THREE.ExtrudeGeometry(finAccentShape, {
      depth: 0.03,
      bevelEnabled: false,
    });
    const finAccent = new THREE.Mesh(finAccentGeometry, accentMaterial);
    finAccent.rotation.x = Math.PI / 2;
    finAccent.rotation.y = Math.PI / 2;
    finAccent.position.set(-0.95, fuselageRadius, 0.015);
    airplane.add(finAccent);

    // === HORIZONTAL STABILIZERS (small rear wings) ===
    const hStabSpan = 0.5;
    const hStabShape = new THREE.Shape();
    hStabShape.moveTo(0, 0);
    hStabShape.lineTo(0.2, 0);
    hStabShape.lineTo(0.12, hStabSpan);
    hStabShape.lineTo(0.02, hStabSpan);
    hStabShape.lineTo(0, 0);

    const hStabGeometry = new THREE.ExtrudeGeometry(hStabShape, {
      depth: 0.02,
      bevelEnabled: false,
    });

    // Left horizontal stab
    const leftHStab = new THREE.Mesh(hStabGeometry, whiteMaterial);
    leftHStab.rotation.x = Math.PI / 2;
    leftHStab.position.set(-0.95, 0.05, 0);
    leftHStab.castShadow = true;
    airplane.add(leftHStab);

    // Right horizontal stab
    const rightHStabShape = new THREE.Shape();
    rightHStabShape.moveTo(0, 0);
    rightHStabShape.lineTo(0.2, 0);
    rightHStabShape.lineTo(0.12, -hStabSpan);
    rightHStabShape.lineTo(0.02, -hStabSpan);
    rightHStabShape.lineTo(0, 0);

    const rightHStabGeometry = new THREE.ExtrudeGeometry(rightHStabShape, {
      depth: 0.02,
      bevelEnabled: false,
    });
    const rightHStab = new THREE.Mesh(rightHStabGeometry, whiteMaterial);
    rightHStab.rotation.x = Math.PI / 2;
    rightHStab.position.set(-0.95, 0.05, 0);
    rightHStab.castShadow = true;
    airplane.add(rightHStab);

    // === ENGINES (under wings) ===
    const engineRadius = 0.07;
    const engineLength = 0.25;
    const engineGeometry = new THREE.CylinderGeometry(engineRadius, engineRadius * 1.1, engineLength, 16);
    engineGeometry.rotateZ(Math.PI / 2);

    // Left engine
    const leftEngine = new THREE.Mesh(engineGeometry, engineMaterial);
    leftEngine.position.set(0.15, -0.12, 0.45);
    leftEngine.castShadow = true;
    airplane.add(leftEngine);

    // Right engine
    const rightEngine = new THREE.Mesh(engineGeometry, engineMaterial);
    rightEngine.position.set(0.15, -0.12, -0.45);
    rightEngine.castShadow = true;
    airplane.add(rightEngine);

    // Engine intake rings
    const intakeGeometry = new THREE.TorusGeometry(engineRadius, 0.012, 8, 24);

    const leftIntake = new THREE.Mesh(intakeGeometry, windowMaterial);
    leftIntake.rotation.y = Math.PI / 2;
    leftIntake.position.set(0.28, -0.12, 0.45);
    airplane.add(leftIntake);

    const rightIntake = new THREE.Mesh(intakeGeometry, windowMaterial);
    rightIntake.rotation.y = Math.PI / 2;
    rightIntake.position.set(0.28, -0.12, -0.45);
    airplane.add(rightIntake);

    // Engine pylons (connecting engines to wings)
    const pylonGeometry = new THREE.BoxGeometry(0.15, 0.08, 0.02);
    
    const leftPylon = new THREE.Mesh(pylonGeometry, whiteMaterial);
    leftPylon.position.set(0.15, -0.06, 0.45);
    airplane.add(leftPylon);

    const rightPylon = new THREE.Mesh(pylonGeometry, whiteMaterial);
    rightPylon.position.set(0.15, -0.06, -0.45);
    airplane.add(rightPylon);

    // === FUSELAGE ACCENT STRIPE (brand color) ===
    const stripeGeometry = new THREE.CylinderGeometry(fuselageRadius + 0.002, fuselageRadius + 0.002, fuselageLength * 0.9, 24, 1, true, -0.3, 0.6);
    stripeGeometry.rotateZ(Math.PI / 2);
    const fuselageStripe = new THREE.Mesh(stripeGeometry, accentMaterial);
    fuselageStripe.position.y = 0.02;
    airplane.add(fuselageStripe);

    // Scale the entire airplane
    airplane.scale.setScalar(0.4);

    return airplane;
  }, []);

  // Create globe with atmospheric effect
  const createGlobe = useCallback((): THREE.Mesh => {
    const globeGeometry = new THREE.SphereGeometry(1.5, 64, 64);
    
    // Create gradient material for the globe
    const globeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1a4a8a,
      metalness: 0.1,
      roughness: 0.7,
      clearcoat: 0.3,
      clearcoatRoughness: 0.4,
      emissive: 0x0a2a5a,
      emissiveIntensity: 0.15,
    });

    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    globe.castShadow = true;
    globe.receiveShadow = true;

    return globe;
  }, []);

  // Create atmospheric glow
  const createAtmosphere = useCallback((): THREE.Mesh => {
    const atmosphereGeometry = new THREE.SphereGeometry(1.58, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      uniforms: {
        glowColor: { value: new THREE.Color(0x4da6ff) },
        viewVector: { value: new THREE.Vector3(0, 0, 5) },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPositionNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPositionNormal = normalize((modelViewMatrix * vec4(position, 1.0)).xyz);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        varying vec3 vNormal;
        varying vec3 vPositionNormal;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vPositionNormal), 3.0);
          gl_FragColor = vec4(glowColor, intensity * 0.5);
        }
      `,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
    });

    return new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.5, 6);
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x6090c0, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(-5, 8, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    scene.add(directionalLight);

    // Rim light for depth
    const rimLight = new THREE.DirectionalLight(0x4da6ff, 0.5);
    rimLight.position.set(3, -2, -5);
    scene.add(rimLight);

    // Fill light
    const fillLight = new THREE.DirectionalLight(0x8090a0, 0.3);
    fillLight.position.set(-3, -1, 3);
    scene.add(fillLight);

    // Create globe
    const globe = createGlobe();
    scene.add(globe);

    // Create atmosphere
    const atmosphere = createAtmosphere();
    scene.add(atmosphere);

    // Create orbit group (tilted orbital plane)
    const orbitGroup = new THREE.Group();
    orbitGroup.rotation.x = THREE.MathUtils.degToRad(28); // Tilt the orbital plane
    scene.add(orbitGroup);

    // Create airplane
    const airplane = createAirplane();
    airplane.position.set(2.2, 0, 0); // Position on orbit radius
    airplane.rotation.y = Math.PI / 2; // Face direction of travel
    orbitGroup.add(airplane);

    // Store references
    sceneRef.current = {
      scene,
      camera,
      renderer,
      globe,
      airplane,
      orbitGroup,
    };

    // Animation timing
    const startTime = performance.now();
    const globeAppearDuration = 500; // 0.5s
    const orbitDuration = 2500; // 2.5s
    const totalOrbits = 2;
    const brandRevealDelay = 300; // 0.3s pause after orbit
    const brandRevealDuration = 700; // 0.7s
    const brandHoldDuration = 2000; // 2s hold after brand is shown
    const exitDuration = 600; // 0.6s
    const totalDuration = globeAppearDuration + orbitDuration + brandRevealDelay + brandRevealDuration + brandHoldDuration + exitDuration;

    let orbitCompleted = false;
    let brandShown = false;

    // Animation loop
    const animate = () => {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;

      if (!sceneRef.current) return;

      const { globe, airplane, orbitGroup } = sceneRef.current;

      // Phase 1: Globe appearance (0 - 500ms)
      if (elapsed < globeAppearDuration) {
        const progress = elapsed / globeAppearDuration;
        const easedProgress = easeOutCubic(progress);
        globe.scale.setScalar(easedProgress);
        atmosphere.scale.setScalar(easedProgress);
        orbitGroup.visible = false;
      }
      // Phase 2: Orbital animation (500ms - 3000ms)
      else if (elapsed < globeAppearDuration + orbitDuration) {
        globe.scale.setScalar(1);
        atmosphere.scale.setScalar(1);
        orbitGroup.visible = true;

        const orbitElapsed = elapsed - globeAppearDuration;
        const orbitProgress = orbitElapsed / orbitDuration;

        // Two full orbits with easeInOut for smooth start/stop
        const easedProgress = easeInOutCubic(orbitProgress);
        const rotationAngle = easedProgress * Math.PI * 2 * totalOrbits;

        orbitGroup.rotation.y = rotationAngle;

        // Keep airplane facing direction of travel
        airplane.rotation.y = Math.PI / 2;

        // Slight bob effect for realism
        airplane.position.y = Math.sin(rotationAngle * 4) * 0.03;
      }
      // Phase 3: Pause + Brand reveal + Hold (3000ms - 6000ms)
      else if (elapsed < globeAppearDuration + orbitDuration + brandRevealDelay + brandRevealDuration + brandHoldDuration) {
        if (!orbitCompleted) {
          orbitCompleted = true;
          // Ensure final position is correct
          orbitGroup.rotation.y = Math.PI * 2 * totalOrbits;
        }

        // Show brand after pause
        if (elapsed > globeAppearDuration + orbitDuration + brandRevealDelay && !brandShown) {
          brandShown = true;
          setShowBrand(true);
        }
      }
      // Phase 4: Exit transition
      else if (elapsed < totalDuration) {
        const exitElapsed = elapsed - (globeAppearDuration + orbitDuration + brandRevealDelay + brandRevealDuration + brandHoldDuration);
        const exitProgress = exitElapsed / exitDuration;
        const easedExit = easeInOutCubic(exitProgress);

        // Scale up globe slightly
        const scaleValue = 1 + (0.05 * easedExit);
        globe.scale.setScalar(scaleValue);
        atmosphere.scale.setScalar(scaleValue);

        // Start fade out
        if (exitProgress > 0.3 && !fadeOut) {
          setFadeOut(true);
        }
      }
      // Complete
      else {
        // Cleanup and call onComplete
        cancelAnimationFrame(animationRef.current!);
        
        // Dispose resources
        renderer.dispose();
        globe.geometry.dispose();
        (globe.material as THREE.Material).dispose();
        atmosphere.geometry.dispose();
        (atmosphere.material as THREE.Material).dispose();
        
        airplane.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            if (child.material instanceof THREE.Material) {
              child.material.dispose();
            }
          }
        });

        if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }

        sceneRef.current = null;
        onComplete();
        return;
      }

      // Slow globe rotation for ambient effect
      globe.rotation.y += 0.001;

      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Handle resize
    const handleResize = () => {
      if (!sceneRef.current) return;
      const { camera, renderer } = sceneRef.current;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (sceneRef.current) {
        const { renderer, globe, airplane } = sceneRef.current;
        renderer.dispose();
        globe.geometry.dispose();
        (globe.material as THREE.Material).dispose();
        airplane.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            if (child.material instanceof THREE.Material) {
              child.material.dispose();
            }
          }
        });
        if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
          containerRef.current.removeChild(renderer.domElement);
        }
      }
    };
  }, [createGlobe, createAtmosphere, createAirplane, onComplete]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[9999] transition-opacity duration-600 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      style={{
        background: 'linear-gradient(135deg, #008acc 0%, #2d3d7c 100%)',
      }}
    >
      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.3) 100%)',
        }}
      />

      {/* Brand reveal overlay */}
      <div
        ref={brandRef}
        className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-500 ${showBrand ? 'opacity-100' : 'opacity-0'}`}
        style={{ zIndex: 10 }}
      >
        <div className="text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold tracking-wider transition-all duration-500 ${showBrand ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{
              color: '#ffffff',
              fontFamily: 'Poppins, sans-serif',
              textShadow: '0 2px 20px rgba(255,255,255,0.3)',
              transitionDelay: '100ms',
            }}
          >
            Roamzyy
          </h1>

          <div
            className={`flex items-center justify-center gap-4 mt-4 transition-all duration-500 ${showBrand ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '250ms' }}
          >
            <div
              className={`h-[1px] bg-white/70 transition-all duration-500 ${showBrand ? 'w-16' : 'w-0'}`}
              style={{ transitionDelay: '350ms' }}
            />
            <p
              className="text-white/90 text-sm md:text-base tracking-widest uppercase"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Journeys made easy
            </p>
            <div
              className={`h-[1px] bg-white/70 transition-all duration-500 ${showBrand ? 'w-16' : 'w-0'}`}
              style={{ transitionDelay: '350ms' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader3D;
