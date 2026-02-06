import { motion, Variants } from "framer-motion";


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,    
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -24, // أقل = أنعم
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
      mass: 0.8,
    },
  },
};

const NewsFeed = () => {

return (


    <>
    

    <section className="NewsFeed container mx-auto PX-4 space-y-7">

        <div  className="newfeed-content flex flex-col justify-center text-center items-center space-y-1.5">
            <h5 className="font-bold text-[#6C7275] font-inter">NEWSFEED</h5>
            <p className="font-poppins text-[2.5rem] font-medium">Instagram</p>
            <p className="text-[1.25rem] font-inter text-[#121212] font-noraml">Follow us on social media for more discount & promotions inter</p>
            <p className="font-poppins font-medium text-[1.25rem] text-[#6C7275] mt-2.5">@3legant_official</p>
        </div>

        <motion.div
  className="newsfeed-images grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center mt-10"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.div variants={itemVariants} className="img w-74 h-74 overflow-hidden rounded-lg">
    <img className="w-full h-full object-cover" src="/images/insta1.webp" alt="headphone" />
  </motion.div>

  <motion.div variants={itemVariants} className="img w-74 h-74 overflow-hidden rounded-lg">
    <img className="w-full h-full object-cover" src="/images/insta2.webp" alt="headphone" />
  </motion.div>

  <motion.div variants={itemVariants} className="img w-74 h-74 overflow-hidden rounded-lg">
    <img className="w-full h-full object-cover" src="/images/insta3.webp" alt="headphone" />
  </motion.div>

  <motion.div variants={itemVariants} className="img w-74 h-74 overflow-hidden rounded-lg">
    <img className="w-full h-full object-cover" src="/images/insta4.webp" alt="headphone" />
  </motion.div>
        </motion.div>



    </section>

    </>
)
}

export default NewsFeed