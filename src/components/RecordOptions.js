import styled from "styled-components"

export default function RecordOptions() {
  return (
     <RecordOptionsStyle>
          <ion-icon name="add-circle-outline"></ion-icon>
     <div></div>
        <ion-icon name="remove-circle-outline"></ion-icon>

      </RecordOptionsStyle>
  )
}

const RecordOptionsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;
  padding: 25px;
  position: fixed;
  bottom:0;
  left:0;
  gap: 80px;

    ion-icon{
      font-size: 40px;
    }

    div{
      height: 20px;
      border: 1px solid rgba(255, 255, 255, 0.3)
    }
  
`;
