module.exports = (sequelize, DataTypes) => {
    const Cars = sequelize.define('Cars', {
        id: {type: DataTypes.INTEGER , primaryKey: true, autoIncrement: true},
       name: {type: DataTypes.STRING , allowNull: false},
       year: {type: DataTypes.INTEGER , allowNull: false},
       createdAt: {type: DataTypes.DATE , allowNull: false},
       updatedAt: {type: DataTypes.DATE , allowNull: false}
    }, {
        tableName: 'cars',
    });
    // Cars.associate = function(models) {
    //     // associations can be defined here
    // };
    return Cars;
}