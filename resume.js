// contact section

var arr1=[
    {icon:"fa fa-phone contactIcon", conval:"(+91) 8658040407"},
    {icon:"fa fa-envelope contactIcon", conval:"sahug8279@gmail.com"},
    {icon:"fa fa-map-marker contactIcon", conval:"Hyderabad,INDIA."},
    {icon:"fa fa-linkedin-square contactIcon", conval:"in/loremipsum"},
    {icon:"fa fa-github contactIcon", conval:"loremipsum"},
]
function print1(){
    var clutter1 = "";
        arr1.forEach(function (val1 , index) {
            clutter1 += ` <p>
            <i class="${val1.icon}" aria-hidden="true"></i>
            <a href="${val1.conval}" style="font-size: 0.40cm;"> ${val1.conval} <a>
          </p> `;
        })
        console.log(clutter1)
        document.getElementById("contact").innerHTML = clutter1;

        }
 print1();


//skill section

var arr2=[
{skill:"html , css, js", year:1},
{skill:"windows , linux" , year:"1"},
{skill:"C , C++ , JAVA" , year:"1"},
{skill:"word,,excel & powerpoint" , year:"1"}
];

function print(){
    var clutter = "";
        arr2.forEach(function (val , index) {
            clutter += ` <div class="skill">
            <div>
                <span>${val.skill}</span>
            </div>
            <div class="yearsOfExperience">
                <span class="alignright">${val.year}</span>
                <span class="alignleft">year</span>
            </div>
            </div> `;
        })
        console.log(clutter)
        document.getElementById("skill").innerHTML = clutter;

        }
 print();


//skill bar
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".frstBAR");

    progressBars.forEach(bar => {
        const value = bar.getAttribute("data-value");
        bar.style.width = `${value}%`;
    });
});

//education
var arr3=[
    {classnm:"MCA (8.5 cgpa)", years:"Jun 2022-2024",institute:"Board of secondary education,Odisha "},
    {classnm:"Bsc physics (8.2 cgpa)", years:"Jun 2018-2021",institute:"kallikote university,Ganjam,Odisha "},
    {classnm:"12th (74%)", years:"Jun 2018",institute:"Council of higher secondary education,Odisha "},
    {classnm:"10th (90%)", years:"Jun 2016",institute:"Board of secondary education,Odisha "},
]

function print3(){
    var clutter2 = "";
        arr3.forEach(function (val , index) {
            clutter2 += ` <li>
            <div class="jobPosition">
                <span class="bolded">
                ${val.classnm}
                </span>
                <span>
                ${val.years}
                </span>
              </div>
              <div class="projectName smallText42cm">
                <span> ${val.institute}
                </span>
              </div>
        </li> `})
            console.log(clutter2)
            document.getElementById("edu-cation").innerHTML = clutter2;
        }
        print3();

        //project section
        var arr4=[
            {pr:"project1", time:"2week",projectname:" student management system | java , sql , spring framework",about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci at impedit dicta dolore quas ab, fugit sint et quos iure."},
            {pr:"project2", time:"2week",projectname:" responsive and interactive website| html,css,js,react ",about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci at impedit dicta dolore quas ab, fugit sint et quos iure."},
            {pr:"project3", time:"2week",projectname:" multiple responsive landing pages| html,css,js,bootstrap,tailwind",about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci at impedit dicta dolore quas ab, fugit sint et quos iure."},]

         function print4(){
            var clutter4 = "";
                 arr4.forEach(function (val , index) {
                      clutter4 += ` <li>
                      <div class="jobPosition">
                        <span class="bolded">
                        ${val.pr}
                        </span>
                        <span>
                        ${val.time}
                        </span>
                      </div>
                      <div class="projectName bolded">
                        <span>
                        ${val.projectname}
                        </span>
                        <p>${val.about}</p>
                      </div>
                    </li> `})
                      console.log(clutter4)
                      document.getElementById("pro-jects").innerHTML = clutter4;
                  }
                  print4();