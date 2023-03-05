document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = 'X';
  
    closeButton.addEventListener('click', () => {
      const commentBubble = document.getElementById('comment-bubble');
      if (commentBubble) {
        commentBubble.remove();
      }
    });
  });


function showComment(text) {


    // Check if an existing comment bubble exists
    const existingCommentBubble = document.getElementById('comment-bubble');
    if (existingCommentBubble) {
      existingCommentBubble.remove();
    }
  
    // Create a new element for the comment bubble
    const commentBubble = document.createElement('div');
    commentBubble.setAttribute('id', 'comment-bubble');
  
    // Set the styles for the comment bubble
    
    commentBubble.style.position = 'fixed';
    commentBubble.style.width = '100%';
    commentBubble.style.maxWidth = '400px';
    commentBubble.style.height = 'auto';
    commentBubble.style.overflow = 'auto';
    commentBubble.style.backgroundColor = '#fff';
    commentBubble.style.borderRadius = '20px';
    commentBubble.style.padding = '20px';
    commentBubble.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 0.5)';
    commentBubble.style.top = '50%';
    commentBubble.style.right = '30%';
    commentBubble.style.left = '55%';
    commentBubble.style.transform = 'translate(50%, -50%)';

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '24px';
    closeButton.style.cursor = 'pointer';
    commentBubble.appendChild(closeButton);
    
    closeButton.addEventListener('click', () => {
      commentBubble.remove();
    });
    
    const closeButtonText = document.createTextNode('X');
    closeButton.appendChild(closeButtonText);
    commentBubble.appendChild(closeButton);



   
  
    // Set the content of the comment bubble
    if (text === 'Get in Touch With Me') {
      // Create the form for the "Get A Hold of Me" button
      const form = document.createElement('form');
      
      form.innerHTML = `
        <form name="submit-to-google-sheet">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>
        <label for="message">Message:</label>
        <textarea id="message" name="message"></textarea><br><br>
        <input type="submit" value="Submit">
      `;
      
      commentBubble.appendChild(form);
    } else if (text === 'About My Education') {
      // Create an image for the "About My Education" button
      const img = document.createElement('img');
      img.src = 'images/uwo.jpeg';
      img.width = '150';
      img.height = '70';
      img.style.marginBottom = '20px';
      img.style.fontWeight = 'bold';
      commentBubble.appendChild(img);
  
      const educationText = document.createElement('p');
      educationText.innerText = 'BS in Computer Science from 2023 to 2025';
      educationText.style.fontSize = '16px';
      educationText.style.fontWeight = 'bold';
      commentBubble.appendChild(educationText);
  
      const img2 = document.createElement('img');
      img2.src = 'images/fvtc.jpeg';
      img2.width = '150';
      img2.height = '70';
      img2.style.marginTop = '20px';
      img2.style.fontWeight = 'bold';
      commentBubble.appendChild(img2);
  
      const softwareText = document.createElement('p');
      softwareText.innerText = 'Associates in Software Development';
      softwareText.style.fontSize = '16px';
      softwareText.style.fontWeight = 'bold';
      commentBubble.appendChild(softwareText);
    }else if (text === 'Coding Knowledge') {
        // Add text for the "Coding Knowledge" button
        const codingText = document.createElement('p');
        codingText.innerHTML = `<p>My coding knowledge is diverse and versatile, as I have experience with various programming languages and software. In my current profession, I use programs such as Filemaker, Adobe Illustrator, Photoshop, InDesign, and Acrobat.</p>
        <br>
        <p>During my time as a junior in college, I have learned valuable skills in HTML, CSS, JavaScript, PHP, MySQL, C#, C++, systems analysis, and mobile development. This combination of knowledge has allowed me to approach problem-solving and project development from various angles, making me a well-rounded and adaptable programmer.
        
        I am constantly seeking to expand my skill set and knowledge base to stay current and competitive in the rapidly evolving tech industry.</p>`;
  
        commentBubble.appendChild(codingText);
      }else if (text === 'My Life Journey') {
        // Add text for the "My Life Journey" button
        const lifeJourneyText = document.createElement('p');
        lifeJourneyText.innerHTML = `
          <p>I was born and raised in Wisconsin, and I had a pretty active childhood. I spent over eight years wrestling and was pretty good at it. My family always had a "never give up attitude", and that instilled in me the drive to keep pushing forward even when things got tough.</p>
          <br>
          <p>Growing up, I always had a passion for technology, and I loved tinkering with computers and learning new things. After high school, I decided to attend culinary school and became a chef for a good portion of my young adult life. However, after having my first child, I knew I needed to be more successful and provide a better life for my family.</p>
          <br>
          <p>That's when I made the decision to go back to school for software development. I attended a local university and pursued my degree in computer science. I found that I had a passion for front-end development, but also have a great deal of respect and passion for back-end development. My biggest dream is to work in web3 development, and I'm constantly learning new things to make that dream a reality.</p>
        `;
        commentBubble.appendChild(lifeJourneyText);
      }
  
    // Append the comment bubble to the page
    document.body.appendChild(commentBubble);
  }

 
