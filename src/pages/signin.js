import { useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { NavLink, useNavigate  } from "react-router-dom";
import { Button } from "react-bootstrap";

function SignIn() {
  const [profile, setProfile] = useState(null);
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `home`; 
    navigate(path);
  }
  return (
    <div>
      {!profile ? (
        <div
          style={{
            display: "flex",
            maxWidth: "600px",
            justifyContent: "center",
            margin: "0 auto",
            minHeight: "100vh",
            alignItems: "center",
            flexDirection:"column"
          }}
        >
          <LoginSocialFacebook
            appId="485253273736433"
            onResolve={(response) => {
              console.log(response);
              setProfile(response.data);
            }}
            onReject={(error) => {
              console.log(error);
            }}
          >
            <FacebookLoginButton />
          </LoginSocialFacebook>
          <Button variant="primary"  size="lg" className="mt-5"  onClick={routeChange}>
            Go To Home
          </Button>
        </div>
      ) : (
        ""
      )}

      {profile ? (
        <div  style={{
            display: "flex",
            maxWidth: "600px",
            justifyContent: "center",
            margin: "0 auto",
            minHeight: "100vh",
            alignItems: "center",
            flexDirection:"column"
          }}>
          <h1>{profile.name}</h1>
          <img src={profile.picture.data.url} />
          <Button variant="primary"  size="lg" className="mt-5"  onClick={routeChange}>
            Go To Home
          </Button>
        </div>
      ) : (
        ""
      )}
        
    </div>
  );
}

export default SignIn;
