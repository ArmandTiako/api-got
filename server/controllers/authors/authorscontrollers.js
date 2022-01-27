import express from 'express'
import {request, response} from "express";
import {authorModel} from "../../models/author.model.js";

// Creating a new author into a controller
export const createAuthor = async (request, response) => {
   const {name, books} = request.body
    if(name === "" || books === "") {
        return response.status(400).json({
            error: true,
            message: "Provide fields"
        })
    }
   let newAuthor = await authorModel.create({name, books})
    return response.status(201).json({
        error: false,
        data: newAuthor
    })
}

export const findOneAuthor = (request, response) => {

}
export const findAllAuthors = (request, response) => {

}
export const updateAuthor = (request, response) => {

}
export const deleteAuthor = (request, response) => {

}

