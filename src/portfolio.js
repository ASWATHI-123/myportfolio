const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://github.com/ASWATHI-123/PORTFOLIO',
    title: 'AS.',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Aswathi P Shajith',
    role: 'MERN Stack Developer',
    description:
      ' I am Aswathi P Shajith, an IT graduate and MERN stack learner with a passion for coding and creativity.',
    resume: 'https://drive.google.com/file/d/1BHU8szcLRgrevRZMAOvtihX-nSRPg2Es/view?usp=sharing',
    social: {
      linkedin: 'https://www.linkedin.com/in/aswathi-shajith/',
      github: 'https://github.com/ASWATHI-123',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Eye-Commerce',
      description:
        ' E-commerce website for individuals with physical disabilities ”Eye Commerce”.Design an easy-to-use and intuitive interface that allows amputees  to navigate through an E-commerce website and also define how the user’s eye gaze will interact with the E-commerce website.'
  ,
  
      stack: ['Firebase', 'Node js', 'React js','dlib','PyAutoGUI','Razorpay','Opencv'],
      sourceCode: 'https://github.com/ASWATHI-123/MainProject',
      
    },
    {
      name: 'Expense-Tracker',
      description:
        'The Expense Tracker app uses React for the UI and Redux for state management.Redux centralizes the state, allowing components like ‘App‘ and ‘TransactionsList‘ to share and manage transaction data efficiently. When users add or delete a transaction, Redux actions update the state, ensuring  smooth and scalable app functionality. ',
        stack: [ 'React js','Redux'],
  
  
      sourceCode: 'https://github.com/ASWATHI-123/Expense-tracker-React-Redux',
   
    },
    {
      name: '”BOOK-MY-SPACE',
      description:
      'Build a web ”BOOK-MY-SPACE” to provide an online platform where users can pre-book their parking slots in advance and allow users to book their parking slots by simply entering their destination, date, and time with an extra feature of time extension and had a quantified success using python and flask.'
      
      
      ,
     
      sourceCode: 'https://github.com/ASWATHI-123/Book-my-space',
      
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'Node js',
    'MongoDB',
    'Express js',
    'Python',
    'DBMS',
    
    'React',
    'Redux',
  
   
    'Git',
   
    
    
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'aswathishajithpalat@gmail.com',
  }
  
  export { header, about, projects, skills, contact }
  