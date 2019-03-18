const axios = require('axios')
const url = "http://saral.navgurukul.org/api"
// const exercise = "http://saral.navgurukul.org/api/courses/14/exercises"
courseURL = url + "/courses"
axios.get(courseURL).then((resp) => {
    const availableCourses = resp.data.availableCourses
    let course_id_list = []
    // console.log("@@@@@@@@@@@@@ WELCOME TO SARAL @@@@@@@@@@@@@@@")\
for(let i = 0;i < availableCourses.length;i++){
    let course = availableCourses[i]
    console.log ("******************************")
    console.log (i+1,course.name)
    course_id_list.push(course.id)
    // console.log(course_id_list)

}
return course_id_list

}).then((course_id_list) => {
    const read = require("readline-sync")
    var input = read.question("Choose any cousre which you want to learn.\n Your answer:-")
    return course_id_list[input]
    // console.log(id)

}).then((course_id) => {
     // let all_exercises =[]
    // for(let i=0; i<course_id.length; i++){
        let exercise = courseURL + "/" +`${course_id}`+"/exercises"
        // console.loList = [
    // let exercise= url + `/${course_id[i]}/exercises`
        axios.get(exercise).then((res) =>{
        let all_exercise=(res.data.data)
        // console.log(all_exercise)
        slugList = []
            for(let i=0;i<all_exercise.length;i++){
                var exercise = all_exercise[i]
                var exercise_name= exercise.name
                var exercise_slug = exercise.slug
                slugList.push(exercise_slug)                 
                console.log(i,exercise_name,"parent")
         }
        //  console.log(slugList)
                for (let i=0;i<exercise.childExercises.length;i++){
                    var child_Exercise = exercise.childExercises[i];
                    var childExercis=child_Exercise.name5

                    var childExercise_slug = child_Exercise.slug
                    console.log(i,childExercis,"child")
                    slugList.push(childExercise_slug)                 
                }                             
            return slugList
        }).then((slugList)=>{
            const read = require("readline-sync")
            var input = read.question("Choose any cousre which you want to learn.\n Your answer:-")
            return slugList[input]
        }).then((slug_input)=>{
            let slug = `http://saral.navgurukul.org/api/courses/` + course_id +`/exercise/getBySlug?slug=` + slug_input;
        
            axios.get(slug).then((result) => {
                let all_slug = result.data.content
                console.log(all_slug)
            }).then(()=>{
            const read = require("readline-sync")
            var user_input = read.question("press next (n) /previous (p) /up (u) ")
            return user_input
            })
            if(user_input === "n"){
                
            
            }
        })          
     })
