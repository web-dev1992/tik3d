import styled from "styled-components";
const RangeProgress = styled.div`
  input[type="range"] {
    -webkit-appearance: none;
  }
  input[type="range"]:focus {
    outline: none;
  }
  //chrome
  input[type="range"]::-webkit-slider-runnable-track {
    height: 100%;
    cursor: pointer;
    background: #131819;
    border-radius: 50%;
  }
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 100%;
    width: 4px;
    background: #367ebd;
    border-radius: 50%;
    box-shadow: -900px 0 0 900px #367ebd;
    margin-top: -2px;
  }
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #131819;
  }
  //   mozilla
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: #131819;
    border-radius: 50%;
  }
  input[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    height: 100%;
    width: 4px;
    background: #367ebd;
    border-radius: 50%;
    box-shadow: -900px 0 0 900px #367ebd;
    margin-top: -2px;
  }
  //ie & edge
  input[type="range"]::-ms-track {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  input[type="range"]::-ms-fill-lower {
    background: #2a6495;
    border-radius: 50%;
  }
  input[type="range"]::-ms-fill-upper {
    background: #2a6495;
    border-radius: 4px;
  }
  input[type="range"]::-ms-thumb {
    -webkit-appearance: none;
    height: 100%;
    width: 4px;
    background: #131819;
    border-radius: 50%;
    box-shadow: -900px 0 0 900px #367ebd;
    margin-top: -2px;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #3071a9;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #367ebd;
  }
`;

const ProgressBar: React.FC<{
  min?: number;
  max: number;
  currentSeek: number;
  handleSeekChange: (e) => void;
}> = ({ min = 0, max, currentSeek, handleSeekChange }) => {
  return (
    <RangeProgress>
      <input
        className="rounded-lg overflow-hidden appearance-none bg-black h-[3px] xl:h-1 w-full"
        type="range"
        min={min}
        max={max}
        value={currentSeek}
        onInput={(e) => handleSeekChange(e)}
      />
    </RangeProgress>
  );
};

export default ProgressBar;
