import { db } from "../db.js";

export const recent = (req, res) => {
    const q = "SELECT * FROM recentactivities";
    db.query(q, (err, data) => {
      res.send(data)
    });
  };
export const projects = (req, res) => {
    const q = "SELECT * FROM projects";
    db.query(q, (err, data) => {
      res.send(data)
    });
  };

export const users = (req, res) => {
    const q = "SELECT * FROM users";
    db.query(q, (err, data) => {
      res.send(data)
    });
  };


export const message = (req, res) => {
    const q = "SELECT * FROM users";

    db.query(q, (err, data) => {
      // console.log(data);
      res.send(data)
    });
  };

export const viewProfile = (req, res) => {

    const q = "SELECT * FROM users WHERE id = ?";
  


    db.query(q, req.params.id, (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });                                                                                                                                             
  };

  