import React from 'react'


export default(props) => {

  return(
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <form className="form-horizontal">
            <div className="form-group">
              <label for="inputEmail3" className="col-sm-3 control-label">Email</label>
              <div className="col-sm-9">
                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
              </div>
            </div>
            <div className="form-group">
              <label for="inputPassword3" className="col-sm-3 control-label">Password</label>
              <div className="col-sm-9">
                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <label for="inputPassword3" className="col-sm-3 control-label">Retype Password</label>
              <div className="col-sm-9">
                <input type="password again" className="form-control" id="inputPassword3" placeholder="Password" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-6">
                <button type="submit" className="btn btn-danger">Sign in</button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-sm-6">

          <p> google and facebook sign up </p>
          <button type="submit" className="btn btn-danger" >Sign in</button>

        </div>
      </div>
    </div>
  )

}