import BodyHeading from "./BodyHeading.jsx";
import BodyCards from "./BodyCards.jsx";

const BodySection = () => {
  return (
    <div className="mb-36">
        <BodyHeading/>

        {/* <div className="md:flex bg-blue-500 flex-wrap md:gap-6 justify-center items-center mt-10 "> */}
          <BodyCards/>
        {/* </div> */}

    </div>
  )
}

export default BodySection
