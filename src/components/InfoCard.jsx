import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{textAlign:'center', padding: '0 10%'}}>
       Try saying: <br/>
       Add {isIncome ? 'Income ' : 'Expense '} 
       in Category {isIncome ? 'Business ' : 'House '} 
       on {isIncome ? 'Monday ' : 'tomrrow '} 
       for {isIncome ? '$1000 ' : '$204 '} 
    </div>
  )
}

export default InfoCard
