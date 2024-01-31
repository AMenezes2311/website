import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";
import ConnectSection from "../components/ConnectSection"

import React from 'react';

const UnderConstruction = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <h1 style={styles.header}>Site Under Construction</h1>
      <p style={styles.text}>This page in under development and will be released soon!</p>
      <p style={styles.text}>Stay tuned for updates!</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#121212',
  },
  header: {
    fontSize: '4em',
    color: 'rgb(255,255,255)',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.2em',
    color: '#999',
  },
};

export default UnderConstruction;
