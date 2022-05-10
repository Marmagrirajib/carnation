import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5'>
            <h2 className='text-center mb-5'> Blogs</h2>
            <div className="row">
                <div className="col-lg-6">
                    <h5>1) Difference between javascript and nodejs</h5>
                    <p><small>JavaScript is a programming language. It is running in any web browser with a proper browser engine. Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page. JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). <br />
                        It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately. It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job. Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.</small></p>
                </div>
                <div className="col-lg-6">
                    <h5>2) When should you use nodejs and when should you use mongodb</h5>
                    <p><small>MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily. There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. That’s why we use nodeJS.</small></p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-6">
                    <h5>3) Differences between sql and nosql databases.</h5>
                    <p><small>The five critical differences between SQL vs NoSQL are:
                        SQL databases are relational, NoSQL databases are non-relational. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</small></p>
                </div>
                <div className="col-lg-6">
                    <h5>4) What is the purpose of jwt and how does it work</h5>
                    <p><small>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                    </small></p>
                </div>
            </div>

        </div>
    );
};

export default Blog;