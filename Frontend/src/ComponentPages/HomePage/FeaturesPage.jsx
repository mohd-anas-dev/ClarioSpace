import React from 'react'
import "../../ComponentStyles/HomePageStyle.css/FeaturesPage.css"
import ScrollStack, { ScrollStackItem } from '../../components/ScrollStack.jsx'
import Sort from "../../assets/Sort.png"
import Organize from "../../assets/Organize.png"


const FeaturesPage = () => {
  
  return (
    <>
      <div className="FeaturesPage">
        <div className='FeaturesPageContainer '>
        <h1>Quick Solutions</h1>
          <ScrollStack className='Stacks' itemDistance="100" >
            <ScrollStackItem itemClassName='StackTwo'>
              <div className="LeftStack">
                <h1>Organize</h1>
                <p>Seamlessly automate the organization of your files, saving time, reducing clutter, and ensuring everything is always right where you need it.</p>
              </div>
              <div className="RightStack">
                <img src={Organize} alt="" />
              </div>
            </ScrollStackItem>
            <ScrollStackItem itemClassName='StackOne'>
              <div className="LeftStack">
                <h1>Sort & Filter</h1>
                <p>With just a single tap, effortlessly organize, filter, and take full control of your files—making clutter a thing of the past and productivity just a touch away.</p>
              </div>
              <div className="RightStack">
                <img src={Sort}alt="" />
              </div>
            </ScrollStackItem>
            <ScrollStackItem itemClassName='StackThree'>
              <div className="LeftStack">
                <h1>Effortless Sharing</h1>
                <p>Cross-sharing your files is now effortless—collaborate seamlessly, tackle challenges together, and find smarter solutions faster.</p>
              </div>
              <div className="RightStack">
                <img src={Sort} alt="" />
              </div>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </div>
    </>
  )
}

export default FeaturesPage
