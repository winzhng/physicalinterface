// If you wanted a list of them and their distance from the top of the document:
document.querySelectorAll('h2').forEach(heading => {
    console.log(`Heading: "${heading.textContent}" is ${heading.offsetTop}px from the top of the document`)
  })
  
  let theStateOfTheInterface = (event) => { 
    
    let winH = document.documentElement.clientHeight
    let docH = document.documentElement.scrollHeight
    let winY = window.scrollY
    let maxY = docH - winH
    
   
    //scrollspy
    document.querySelector('.panel').innerHTML = `
      <ul class="panel" id="panel_nav">
        <li><a class="panel_item" href="#design"><strong>About</strong></a></li>
        <li><a class="panel_item" href="#enviro"><strong>Environmental Benefits</strong></a></li>
        <li><a class="panel_item" href="#labour"><strong>Labour and Materials</strong></a></li>
        <li><a class="panel_faq" href="#materials">Cost Effective Materials</a></li>
        <li><a class="panel_faq" href="#lab_int">Less Labour Intensive</a></li>
        <li><a class="panel_faq" href="#install">Installation Process</a></li>
        <li><a class="panel_item" href="#flex"><strong>Flexibility</strong></a></li>
        <li><a class="panel_item" href="#cost"><strong>Affordability</strong></a></li>
      </ul>
    `
  
  }
  window.addEventListener('load', theStateOfTheInterface)
  window.addEventListener('scroll', theStateOfTheInterface)
  window.addEventListener('resize', theStateOfTheInterface)