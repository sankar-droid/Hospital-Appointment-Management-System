import { createParamDecorator, ExecutionContext } from "@nestjs/common";


export const User=createParamDecorator(
   (data:string,context:ExecutionContext)=>{

      const req=context.switchToHttp().getRequest();
      if(data)
      {
        return req.user && req.user[data];
      }

   }
);