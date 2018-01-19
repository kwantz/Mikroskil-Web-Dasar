module.exports = {
    returnJsonResponse (res, obj) {
        res.contentType('application/json');
        res.send(JSON.stringify(obj));
    },

    getArrayChart (dataRecord) {
        let objRecord = {};

        const awal = {
            hari: dataRecord[0].dataValues.date.getDate(),
            bulan: dataRecord[0].dataValues.date.getMonth(),
            tahun: dataRecord[0].dataValues.date.getFullYear(),
        };

        const akhir = {
            hari: new Date().getDate(),
            bulan: new Date().getMonth(),
            tahun: new Date().getFullYear(),
        }

        const timeAwal = new Date(awal.tahun, awal.bulan, awal.hari).getTime();
        const timeAkhir = new Date(akhir.tahun, akhir.bulan, akhir.hari).getTime();

        for (let i = timeAwal; i <= timeAkhir; i += 86400000) {
            const timeTemp = new Date(i).getTime();
            objRecord[timeTemp] = 0;
        }

        dataRecord.forEach(record => {
            const hari  = record.dataValues.date.getDate();
            const bulan = record.dataValues.date.getMonth();
            const tahun = record.dataValues.date.getFullYear();

            const timeTemp = new Date(tahun, bulan, hari).getTime();
            for (let i = timeTemp; i <= timeAkhir; i += 86400000) {
                if (record.dataValues.type === '+') {
                    objRecord[i] += Number(record.dataValues.amount);
                } else {
                    objRecord[i] -= Number(record.dataValues.amount);
                }
            }
        });

        const arrayRecord = [];
        for (let record in objRecord) {
            arrayRecord.push([record, objRecord[record]]);
        }

        return arrayRecord;
    },

    getArrayDougnat (dataRecord) {
        let objRecord = {
            'Food & Drinks': 0,
            'Shopping': 0,
            'Housing': 0,
            'Transportation': 0,
            'Vehicle': 0,
            'Life & Entertainment': 0,
            'Communication, PC': 0,
            'Financial expenses': 0,
            'Investments': 0,
            'Income': 0,
            'Others': 0
        };

        dataRecord.forEach(record => {
            const category = record.dataValues.category;

            if (record.dataValues.type === '-') {
                objRecord[category] += Number(record.dataValues.amount);
            }
        });

        const arrayRecord = [];
        for (let record in objRecord) {
            arrayRecord.push([record, objRecord[record]]);
        }

        return arrayRecord;
    }
}
