// Resize Navbar on Scroll
var navbar = document.querySelector(".navbar");
//when the scroll is higher then 20 viewport height, add the sticky class to the tag with a class navbar
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
// Nav Toggle
const navMenu = document.querySelector(".menu"),
      navToggle = document.querySelector(".menu-btn");
      if(navToggle)
      { 
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        })
      }
      // Closing menu when link is clicked
      const navLink = document.querySelectorAll(".nav-link");
      function linkAction()
      {
        const navMenu = document.querySelector(".menu");
        navMenu.classList.remove("active");
      }
      navLink.forEach(n => n.addEventListener("click", linkAction))
      // Scroll Section Active Link
      const Section=document.querySelectorAll('section[id]')
      function scrollActive()
      {
          const scrollY = window.pageYOffset
          Section.forEach(current => {
              const sectionHeight = current.offsetHeight
              const sectionTop = current.offsetTop - 50;
              sectionId = current.getAttribute('id')
              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
              {
                  document.querySelector('.links a[href*=' + sectionId + ']').classList.add('active')
              }
              else
              {
                document.querySelector('.links a[href*=' + sectionId + ']').classList.remove('active')
              }
          })
      }
      window.addEventListener('scroll', scrollActive)
// Skill animation
const skills_wrap = document.querySelector(".about-skills"),
        skills_bar = document.querySelectorAll(".progress-line");
        window.addEventListener("scroll", () => {
            skillsEffect();
        })

function checkScroll(el)
{
    let rect = el.getBoundingClientRect();

    if(window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
}
function skillsEffect()
{
    if(!checkScroll(skills_wrap)) return;
    skills_bar.forEach((skill) => (skill.style.width = skill.dataset.progress));
}   
//  Portfolio item filter
const filterContainer = document.querySelector(".portfolio-filter"),
      filterBtns = filterContainer.children;
      totalFilterBtns = filterBtns.length;
      portfolioItem = document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem = portfolioItem.length;
      for(let i=0; i < totalFilterBtns; i++)
      {
        filterBtns[i].addEventListener("click", function()
        {
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");
            const  filterValue = this.getAttribute("data-filter");
            for(let k=0; k < totalPortfolioItem; k++)
            {
                if(filterValue === portfolioItem[k].getAttribute("data-catagory"))
                {
                    portfolioItem[k].classList.remove("hide");
                    portfolioItem[k].classList.add("show");
                }
                else
                {
                    portfolioItem[k].classList.remove("show");
                    portfolioItem[k].classList.add("hide");
                }
                if(filterValue === "all")
                {
                    portfolioItem[k].classList.remove("hide");
                    portfolioItem[k].classList.add("show"); 
                }
            }
        })
      }
    //  Lightbox
    const lightbox = document.querySelector(".lightbox"),
          lightboxImg = lightbox.querySelector(".lightbox-img"),
          lightboxClose = lightbox.querySelector(".lightbox-close"),
          lightboxText = lightbox.querySelector(".caption-text"),
          lightboxCounter = lightbox.querySelector(".caption-counter");
          let itemIndex = 0;
          for(let i=0; i<totalPortfolioItem; i++)
          {
            portfolioItem[i].addEventListener("click", function() 
        {
            itemIndex=i;
            changeItem();
            toggleLightbox();
        })
          }
           function nextItem()
           {
                if(itemIndex == totalPortfolioItem-1)
                {
                    itemIndex=0;
                }
                else
                {
                    itemIndex++;
                }
                changeItem();
           }
           function prevItem()
           {
                if(itemIndex == 0)
                {
                    itemIndex=totalPortfolioItem-1;
                }
                else
                {
                    itemIndex--;
                }
                changeItem();
           }
          function toggleLightbox()
          {
            lightbox.classList.toggle("open");
          }
          function changeItem()
          {
            imgSrc = portfolioItem[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
            lightboxImg.src=imgSrc;
            lightboxText.innerHTML=portfolioItem[itemIndex].querySelector("h4").innerHTML;
            lightboxCounter.innerHTML = (itemIndex+1) + " of " + totalPortfolioItem;
          }
          // Close Lightbox

          lightbox.addEventListener("click",function(event)
        {
              if(event.target === lightboxClose || event.target === lightbox)
              {
                toggleLightbox()
              }
        })