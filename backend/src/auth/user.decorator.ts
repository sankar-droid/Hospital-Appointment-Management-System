import { createParamDecorator, ExecutionContext } from "@nestjs/common";


export const user=createParamDecorator(
   (data:string,context:ExecutionContext)=>{

      const req=context.switchToHttp().getRequest();
      if(data)
      {
       console.log(req.user[data]);

        return req.user && req.user[data];
      }

   }
);