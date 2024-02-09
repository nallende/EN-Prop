import React from 'react'
import { PropertiesFormStepProps } from '.'
import { Button } from 'antd'

function Amenities({currentStep, setCurrentStep} :  PropertiesFormStepProps ) {
  return (
    <div><span>Amenities</span>   <div className='flex justify-end gap-5'>

    <Button disabled = { currentStep === 0 } type="default"  onClick={()=> setCurrentStep(currentStep -1)}> Back </Button>

    <Button type="primary"  onClick={()=> setCurrentStep(currentStep +1)}> Next </Button>
     
 </div></div>
  )
}

export default Amenities