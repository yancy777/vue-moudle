export default {
	/**
	 * @Name: 性别转化
	 * @param:1、2
	 * @return:男、女、未知
	 */
	formatGender: function(row) {
		return row.Gender == 1 ? '男' : row.Gender == 2 ? '女' : '未知';
	},
	
}