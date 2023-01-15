import CalcScreen from "./CalcScreen";
import CalcButtons from "./CalcButtons";

const CalcFrame = () => {
    return (
        <div className="CalcFrame">
            <CalcScreen/>
            <CalcButtons/>
        </div>
    );
}
 
export default CalcFrame;