import {createParamDecorator,ExecutionContext} from '@nestjs/common';


export const Role=createParamDecorator(
  (data, context:ExecutionContext)=>{
	  const req=context.switchToHttp().getRequest();
      if(data)
      {
       console.log(req.user[data]);

        return req.user && req.user[data];
      }
	  
	  
  }


);