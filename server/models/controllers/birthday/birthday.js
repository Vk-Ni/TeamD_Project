const sequelize = require('sequelize');
const db = require('../../Entity');
const { Op } = sequelize;

const bday = db.userdetails;

const sendData = async (req, res) => {
  try {
    // Use Sequelize to fetch birthdays for today
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // Months are 0-based, so add 1
    const currentDay = today.getDate();

    const birthdays = await bday.findAll({
      where: sequelize.where(
        sequelize.fn('DATE_FORMAT', sequelize.col('dob'), '%m-%d'),
        sequelize.fn('DATE_FORMAT', today, '%m-%d')
      ),
    });
    

    console.log(birthdays);
    res.json(birthdays);
  } catch (error) {
    console.error('Error fetching birthdays:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  sendData
};