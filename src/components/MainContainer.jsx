import React,{useState, useEffect} from 'react'
import HomeContainer from './HomeContainer'
import { motion } from "framer-motion"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { actionType } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'
import RowContainer from './RowContainer'
import MenuContainer from './MenuContainer'
import CartContainer from './CartContainer'
import { getAllFoodItems } from '../utils/firebaseFunctions'



const MainContainer = () => {

  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  useEffect((

  ) => {

     getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      })
    })
  }, [scrollValue, cartShow,dispatch])

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'><HomeContainer />
    <section className='w-full '>
      <div className='w-full flex items-center justify-between'>
        <p className='text-2xl font-semibold Capitalize text-headingColor  relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100'>
            Fresh & healthy fruits 
        </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
       <RowContainer  scrollValue={scrollValue} flag={true}  data={foodItems?.filter((n) => n.category === "fruits")}/>
      </section>
      <MenuContainer />

      {cartShow && <CartContainer />}

      </div>
   
   
  )
}

export default MainContainer