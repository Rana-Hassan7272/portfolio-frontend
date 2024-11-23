import React, { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
import moonImage from "../Images/moon.jpg";
import venusImage from "../Images/venus.jpg";
import spaceImage from "../Images/space.jpg";
import TimeLine from "../TimeLine/TimeLine";
import Typography from "@mui/material/Typography";
import { MouseOutlined } from "@mui/icons-material";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiExpress ,
  SiNodedotjs,
  SiPython ,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import { Link } from "@mui/material";

const Home=({timelines,skills})=> {
    useEffect(() => {
        const textureLoader = new THREE.TextureLoader();
    
        const moonTexture = textureLoader.load(moonImage);
        const venusTexture = textureLoader.load(venusImage);
        const spaceTexture = textureLoader.load(spaceImage);
    
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.set(4, 4, 8);
    
        const canvas = document.querySelector(".canvasHome");
        const renderer = new THREE.WebGLRenderer({ canvas });
    
        const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
        const moonMaterial = new THREE.MeshBasicMaterial({ map: moonTexture });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    
        const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
        const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
        const venus = new THREE.Mesh(venusGeometry, venusMaterial);
        venus.position.set(8, 5, 5);
    
        const pointLight = new THREE.PointLight(0xffffff, 1);
        const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
    
        pointLight.position.set(8, 5, 5);
        pointLight2.position.set(-8, -5, -5);
    
        scene.add(moon);
        scene.add(venus);
        scene.add(pointLight);
        scene.add(pointLight2);
        scene.background = spaceTexture;
    
        const constSpeed = 0.01;
        window.addEventListener("mousemove", (e) => {
          if (e.clientX <= window.innerWidth / 2) {
            moon.rotation.x -= constSpeed;
            moon.rotation.y += constSpeed;
            venus.rotation.x -= constSpeed;
            venus.rotation.y += constSpeed;
          }
    
          if (e.clientX > window.innerWidth / 2) {
            moon.rotation.x -= constSpeed;
            moon.rotation.y -= constSpeed;
            venus.rotation.x -= constSpeed;
            venus.rotation.y -= constSpeed;
          }
    
          if (e.clientY > window.innerHeight / 2) {
            moon.rotation.x -= constSpeed;
            moon.rotation.y += constSpeed;
            venus.rotation.x -= constSpeed;
            venus.rotation.y += constSpeed;
          }
    
          if (e.clientY <= window.innerHeight / 2) {
            moon.rotation.x -= constSpeed;
            moon.rotation.y -= constSpeed;
            venus.rotation.x -= constSpeed;
            venus.rotation.y -= constSpeed;
          }
        });
    
        const animate = () => {
          requestAnimationFrame(animate);
          moon.rotation.y += constSpeed;
          venus.rotation.y += constSpeed;
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.render(scene, camera);
        };
    
        animate();
    
        return window.addEventListener("scroll", () => {
          camera.rotation.z = window.scrollY * 0.001;
          camera.rotation.y = window.scrollY * 0.003;
    
          const skillsBox = document.getElementById("homeskillsBox");
    
          if (window.scrollY > 1500) {
            skillsBox.style.animationName = "homeskillsBoxAnimationOn";
          } else {
            skillsBox.style.animationName = "homeskillsBoxAnimationOn";
          }
        });
      }, []);
  return (
    <div className='home'>
      <canvas className='canvasHome'>

      </canvas>
      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p>H</p>
          <p>A</p>
          <p>S</p>
          <p>S</p>
          <p>A</p>
          <p>N</p>
          
        </Typography>

        <div className="homeCanvasBox">
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">WEB DEVELOPER</Typography>
          <Typography variant="h2">DATA SCIENTIST</Typography>
          <Typography variant="h2">PROGRAMMER</Typography>
        </div>

        <Link to="/projects">VIEW WORK</Link>
      </div>

      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>
      <div className="homeContainer">
  <Typography variant='h3' >TimeLine</Typography>
    <TimeLine timelines={timelines} />
</div> 
<div className="homeSkill">
<Typography variant="h3">SKILLS</Typography>

<div className="homeCube">
  <div className="homeCubeFace homeCubeFace1">
    <img src={skills.image1.url} alt="Face"/>

  </div>
  <div className="homeCubeFace homeCubeFace2">
    <img src={skills.image2.url} alt="Face"/>

  </div>
  
  <div className="homeCubeFace homeCubeFace3">
    <img src={skills.image3.url} alt="Face"/>

  </div>
  
  <div className="homeCubeFace homeCubeFace4">
    <img src={skills.image4.url} alt="Face"/>

  </div>
  
  <div className="homeCubeFace homeCubeFace5">
    <img src={skills.image5.url} alt="Face"/>

  </div>
  
  <div className="homeCubeFace homeCubeFace6">
    <img src={skills.image6.url} alt="Face"/>

  </div>
  
  </div>
  <div className="shadow" ></div>

  
  <div className="homeskillsBox" id="homeskillsBox">
  <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiPython />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
  </div>
  
</div>
    </div>
  )
}
export default Home;