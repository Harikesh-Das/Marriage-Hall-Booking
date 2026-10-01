import pool from " .. /config/db.js";

const createHall = async (name, area, address, price_per_slot, capacity,
    owner_id) => {
    const result = await pool.query(
        "INSERT INTO halls (name, area,address, price_per_slot, capacity, owner_id) VALUES ($1, $2, $3, $4, $5,$6)RETURNING *; ",
        [name, area, address, price_per_slot, capacity, owner_id]);
    return result.rows[0];

}

const getAllHalls = async (location, minPrice, maxPrice, capacity) => {
    let query = "SELECT * FROM halls WHERE 1=1";
    const values = [];
    let index = 1;

    //location filter
    if (location) {
        query += "AND (area LIKE '%'|| $${index} || '%' OR address LIKE '%' || $${index} || '%') ";
        values.push(location);
        index++;
    }
    //min price filter
    if (minPrice !== undefined) {
        query += 'AND price_per_slot>= $${index}';
        values.push(minPrice);
        index++;
    }

    //max price filter 
    if (maxPrice !== undefined) {
        query += 'AND price_per_slot<= $${index}';
        values.push(maxPrice);
        index++;
    }

    //capacity filter
    if (capacity !== undefined) {
        query += "AND capacity >=$${index}";
        values.push(capacity);
        index++;
    }

    const result = await pool.query(query, values);
    return result.rows
}

const getHallById = async (id) => {
    const result = await pool.query("SELECT * FROM halls WHERE id=$1", [id]);
    return result.rows[0];

}

const updateHall = async (name, area, address, price_per_slot, capacity, id) => {
    const result= await pool.query(
        "UPDATE halls SET name=$1, area=$2, address=$3, price_per_slot=$4,capacity=$5 WHERE id=$6 RETURNING *",
        [name,area,address,price_per_slot,capacity,id]
    )
    return result.rows[0];

}

const deleteHall= async (id) => {
    const result= await pool.query(
        "DELETE FROM halls WHERE id=$1 RETURNING *", [id]
    );
    return result.rows[0];
}

export {createHall,getAllHalls,getHallById,updateHall,deleteHall}
