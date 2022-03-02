import {default as Card} from "../card/index"
export default function List(props){
    return (
        <section className="grid mid:grid-cols-1 lg:grid-cols-2  gap-4 mb-5">
              { props.courses.map(course => <Card course = {course} key = {course.id}/>)
              }
            </section>

    )
}