// un modelo es una representacion de datos que tiene una dualidad pero tambien
// son representacion de entrada en la base de datos

module.exports = (sequelize,Sequelize) => {
    const Subject = sequelize.define('subject',{
      title: {
          type: Sequelize.STRING
      },
      description:{
       type:Sequelize.STRING
      },
       cohort: {
           type:Sequelize.STRING
       }
    });
    return Subject;
}