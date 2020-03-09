import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Contact = () => {
  return (
    <div class="container form-main-content bg-light">
            <h1 class="pt-3 mt-4">Contact</h1>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="John Smith" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Email</label>
                    <input type="password" class="form-control" placeholder="Password"/>
                </div>
                <div class="mb-5 pb-5 form-group">
                    <label for="text">Message</label> 
                    <input type="password" class="form-control input-lg" id="overrideHeight"/>
                </div>
            </form>    
        </div>
    );
}
 
export default Contact;