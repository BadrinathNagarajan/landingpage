import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderClosed} from '@fortawesome/free-solid-svg-icons'
function Icons() {
  return (
    <section className='sec'>
    <div className="Container" >
        <div className="col-lg-4">
            <FontAwesomeIcon icon={faFolderClosed}/>
            <h3>Fully Responsive</h3>
            <p>This theme will look great on any device, no is matter the size!</p>
        </div>

        <div className="col-lg-4">
            <FontAwesomeIcon icon={faFolderClosed}/>
            <h3>Bootstrap 5 Ready</h3>
            <p>Featuring the latest build of the new Bootstrap 5 framework!</p>
        </div>

        <div className="col-lg-4">
            <FontAwesomeIcon icon={faFolderClosed}/>
            <h3>Easy to Use</h3>
            <p>Ready to use with your own content, or customize the source files!</p>
        </div>
    </div>
    </section>
  )
}

export default Icons