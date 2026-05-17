'use client';
import { useEffect, useRef } from 'react';

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const init = async () => {
      const THREE = await import('three');
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
      renderer.setClearColor(0x000000, 0);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
      camera.position.z = 5;

      // Floating particles
      const count = 120;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      const sizes = new Float32Array(count);

      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 14;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 9;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 3;
        sizes[i] = Math.random() * 2 + 0.5;
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      const mat = new THREE.PointsMaterial({
        color: 0xF2C84B,
        size: 0.06,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(geo, mat);
      scene.add(points);

      // Wireframe torus
      const torusGeo = new THREE.TorusGeometry(2.5, 0.6, 10, 40);
      const torusMat = new THREE.MeshBasicMaterial({ color: 0xF2C84B, wireframe: true, transparent: true, opacity: 0.07 });
      const torus = new THREE.Mesh(torusGeo, torusMat);
      torus.position.set(3, -1, -2);
      scene.add(torus);

      const clock = new THREE.Clock();

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const t = clock.getElapsedTime();
        points.rotation.y = t * 0.04;
        points.rotation.x = t * 0.02;
        torus.rotation.x = t * 0.3;
        torus.rotation.y = t * 0.2;
        renderer.render(scene, camera);
      };
      animate();

      const onResize = () => {
        if (!canvas.parentElement) return;
        const w = canvas.parentElement.offsetWidth;
        const h = canvas.parentElement.offsetHeight;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      window.addEventListener('resize', onResize);
      return () => { window.removeEventListener('resize', onResize); };
    };

    init();
    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} id="three-canvas" />;
}