
import Alert from 'react-bootstrap/Alert';


const ErrorMessage = ({varient = "info" , children})=>{

    return(
          <Alert  variant={varient}>
          <strong>{children}</strong>
        </Alert>
    );
};

export default ErrorMessage ;

