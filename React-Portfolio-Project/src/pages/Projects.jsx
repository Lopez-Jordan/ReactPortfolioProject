import ProjectCard from '../components/ProjectCard';



export default function Projects() {

  const mainDiv = {
    marginRight: '60px',
    marginLeft: '60px'
  }
    return (
      <div style={mainDiv}>
        <h1 style={{marginTop: '30px', marginBottom: '30px'}}>Check Out My Projects !</h1>
        <div style={{display: 'flex', flex: 'wrap'}}>
          <ProjectCard 
            name="SurfReport"
            deployed="https://surf-report-app-7b1dc82c323b.herokuapp.com/"
            repo="https://github.com/Lopez-Jordan/Surf-Report"
            imagePath='/surfReport.png'
          />
          <ProjectCard 
            name="SurfReport"
            deployed="https://surf-report-app-7b1dc82c323b.herokuapp.com/"
            repo="https://github.com/Lopez-Jordan/Surf-Report"
            imagePath='/surfReport.png'
          />
          <ProjectCard 
            name="SurfReport"
            deployed="https://surf-report-app-7b1dc82c323b.herokuapp.com/"
            repo="https://github.com/Lopez-Jordan/Surf-Report"
            imagePath='/surfReport.png'
          />

        </div>
      </div>
    );
  }
