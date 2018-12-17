/*
 * @Author: sunliang 
 * @Date: 2018-12-17 09:02:04 
 * @Last Modified by: sunliang
 * @Last Modified time: 2018-12-17 09:15:11
 */

var mysql = require('mysql');

var config = {
    user: 'root',
    password: 'root',
    database: 'zk3'
}

var pool = mysql.createPool(config);

module.exports = function(sql, arr, fn) {
    arr = arr || [];
    fn = fn ? fn : arr;
    pool.getConnection(function(err, con) {
        if (err) {
            return fn(err)
        } else {
            con.query(sql, arr, function(err, result) {
                if (err) {
                    return fn(err)
                }
                fn(null, result);
                con.release();
            })
        }
    })
}