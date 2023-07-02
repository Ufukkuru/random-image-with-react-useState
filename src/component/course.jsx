import ReactImages from '../assets/react-new.jpg'
import Angular from '../assets/angular-new.jpg'
import Vue from '../assets/vue-new.jpg'
import Jquery from '../assets/Jquery-new.png'

function Course({courseName}) {
    const courseMap = {
        ReactImages,
        Angular,
        Vue,
        Jquery
    }
    return ( 
        <>
            <div>
                <img className='mb-10' src={courseMap[courseName]} />
            </div> 
        </>
    );
}

export default Course;