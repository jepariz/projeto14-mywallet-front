import styled from "styled-components"

export default function RecordOptions() {
  return (
     <RecordOptionsStyle>
        <div>
          <ion-icon name="add-circle-outline"></ion-icon>
          <p>Nova <br></br> entrada</p>
        </div>
        <div>
        <ion-icon name="remove-circle-outline"></ion-icon>
          <p>Nova <br></br> saída</p>
        </div>
      </RecordOptionsStyle>
  )
}

const RecordOptionsStyle = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 12px;

  div {
    width: 155px;
    height: 114px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 10px;

    p{
      font-size: 17px;
      font-weight: 700;
      margin-top: 25px;
    }

    ion-icon{
      font-size: 25px;
     
    }
  }
`;
