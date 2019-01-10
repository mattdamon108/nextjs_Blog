__NEXT_REGISTER_CHUNK("posts_2019_01_11_Deploy_Next_js_app_to_AWS_Lambda_md_04bda902a544165dfee5d2ac6148efff",function(){webpackJsonp([0],{264:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(1),s=n.n(t),o=n(424);n.n(o);a.default=function(e){var a=e.components;!function(e,a){if(null==e)return{};var n,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(s[n]=e[n]);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}}(e,["components"]);return s.a.createElement(o.MDXTag,{name:"wrapper",components:a},s.a.createElement(o.MDXTag,{name:"h1",components:a},"Next.js with AWS Lambda"),s.a.createElement(o.MDXTag,{name:"p",components:a},"This is a tiny example to show how to deploy the Next.js app on AWS Lambda using ",s.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://up.docs.apex.sh/#introduction"}},"Apex Up"),"."),s.a.createElement(o.MDXTag,{name:"h2",components:a},"Next.js app with custom server"),s.a.createElement(o.MDXTag,{name:"p",components:a},"The custom server for Next.js app is needed to run your app on AWS Lambda. In this example, ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"express")," will be used."),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-javascript",metaString:""}},s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-comment"}},"// server.js"),"\n\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," express = ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-built_in"}},"require"),"(",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"express"'),");\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," next = ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-built_in"}},"require"),"(",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"next"'),");\n\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," port = ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-built_in"}},"parseInt"),"(process.env.PORT, ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"10"),") || ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"3000"),";\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," dev = process.env.NODE_ENV !== ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"production"'),";\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," app = next({ dev });\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," handle = app.getRequestHandler();\n\napp\n  .prepare()\n  .then(",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}},"()")," =>")," {\n    ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"const")," server = express();\n\n    server.get(",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"/"'),", (req, res) => {\n      ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"return")," app.render(req, res, ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"/"'),", req.params);\n    });\n\n    server.get(",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"/about"'),", (req, res) => {\n      ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"return")," app.render(req, res, ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"/about"'),", req.params);\n    });\n\n    server.get(",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"*"'),", (req, res) => {\n      ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"return")," handle(req, res);\n    });\n\n    server.listen(port, err => {\n      ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"if")," (err) ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-keyword"}},"throw")," err;\n      ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-built_in"}},"console"),".log(",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},"`> Ready on http://localhost:",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-subst"}},"${port}"),"`"),");\n    });\n  })\n  .catch(",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-function"}},s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"hljs-params"}},"ex")," =>")," {\n    ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-built_in"}},"console"),".log(ex);\n    process.exit(",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"1"),");\n  });")),s.a.createElement(o.MDXTag,{name:"h2",components:a},"Intsall Apex Up"),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-shell",metaString:""}},s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-meta"}},"$"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"bash"}}," curl -sf https://up.apex.sh/install | sh"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-meta"}},"\n#"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"bash"}}," verify the installation"),"\n",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-meta"}},"$"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"bash"}}," up version"))),s.a.createElement(o.MDXTag,{name:"h2",components:a},"AWS credentials"),s.a.createElement(o.MDXTag,{name:"p",components:a},"You need to have one AWS account and recommend to use IAM with programmaic way for security and convinience. If you have already installed ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"awscli")," or ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"awsebcli"),", etc. You are having ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"~/.aws/credentials")," which is storing AWS credentials. It allows you to use ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"AWS_PROFILE")," environment. If you don't please make one and save it with your account ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"access key")," and ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"security key")," in it."),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-shell",metaString:""}},s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-meta"}},"#"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"bash"}}," ~/.aws/credentials"),"\n\n[my-aws-account-for-lambda]\naws_access_key = xxxxxxxxxxxxx\naws_secret_access_key = xxxxxxxxxxxxxxxxxxxx")),s.a.createElement(o.MDXTag,{name:"h2",components:a},"IAM policy for Up CLI"),s.a.createElement(o.MDXTag,{name:"p",components:a},"IAM policy allows the Up to access your AWS resources in order to deploy your Next.js app on Lambda. Go to ",s.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://aws.amazon.com/iam/"}},"AWS IAM")," and make the new policy and link it up to your AWS account."),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-json",metaString:""}},"{\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"Version"'),": ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"2012-10-17"'),",\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"Statement"'),": [\n    {\n      ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"Effect"'),": ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"Allow"'),",\n      ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"Action"'),": [\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"acm:*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"cloudformation:Create*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"cloudformation:Delete*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"cloudformation:Describe*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"cloudformation:ExecuteChangeSet"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"cloudformation:Update*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"cloudfront:*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"cloudwatch:*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"ec2:*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"ecs:*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"events:*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"iam:AttachRolePolicy"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"iam:CreatePolicy"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"iam:CreateRole"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"iam:DeleteRole"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"iam:DeleteRolePolicy"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"iam:GetRole"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"iam:PassRole"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"iam:PutRolePolicy"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"lambda:AddPermission"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"lambda:Create*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"lambda:Delete*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"lambda:Get*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"lambda:InvokeFunction"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"lambda:List*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"lambda:RemovePermission"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"lambda:Update*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"logs:Create*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"logs:Describe*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"logs:FilterLogEvents"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"logs:Put*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"logs:Test*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"route53:*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"route53domains:*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"s3:*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"ssm:*"'),",\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"sns:*"'),"\n      ],\n      ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"Resource"'),": ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"*"'),"\n    },\n    {\n      ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"Effect"'),": ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"Allow"'),",\n      ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"Action"'),": ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"apigateway:*"'),",\n      ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"Resource"'),": ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"arn:aws:apigateway:*::/*"'),"\n    }\n  ]\n}")),s.a.createElement(o.MDXTag,{name:"h2",components:a},"Create ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"h2"},"up.json")," file"),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-json",metaString:""}},"{\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"name"'),": ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"nextjs-example"'),",\n  # aws account profile in ~/.aws/credentials\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"profile"'),": ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"my-aws-account-for-lambda"'),",\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"regions"'),": [",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"ap-northeast-2"'),"],\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"lambda"'),": {\n    # min 128, default 512\n    ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"memory"'),": ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"256"),",\n    # AWS Lambda supports node.js 8.10 latest\n    ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"runtime"'),": ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"nodejs8.10"'),"\n  },\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"proxy"'),": {\n    ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"command"'),": ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"npm start"'),",\n    ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"timeout"'),": ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"25"),",\n    ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"listen_timeout"'),": ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"15"),",\n    ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"shutdown_timeout"'),": ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-number"}},"15"),"\n  },\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"stages"'),": {\n    ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"development"'),": {\n      ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"proxy"'),": {\n        ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"command"'),": ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"yarn dev"'),"\n      }\n    }\n  },\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"environment"'),": {\n    # you can hydrate env variables as you want.\n    ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"NODE_ENV"'),": ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"production"'),"\n  },\n  ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"error_pages"'),": {\n    ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"variables"'),": {\n      ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"support_email"'),": ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"admin@my-email.com"'),",\n      ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-attr"}},'"color"'),": ",s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-string"}},'"#2986e2"'),"\n    }\n  }\n}")),s.a.createElement(o.MDXTag,{name:"h2",components:a},"Build the Next.js app before deploy"),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-shell",metaString:""}},s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-meta"}},"$"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"bash"}}," yarn build"))),s.a.createElement(o.MDXTag,{name:"h2",components:a},"Create ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"h2"},".upignore")," file"),s.a.createElement(o.MDXTag,{name:"p",components:a},"The Up will inspect your files to compose and deploy to lambda. Firstly The up will read ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".gitignore")," and ignore files written in ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".gitignore"),". And after that, ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".upignore")," will be read. The Up, by default, ignores dotfiles, so needs to negate ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".next")," directory in ",s.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".upignore")," in order for the Up will build the package with it."),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},"# .upignore\n\n!.next\n")),s.a.createElement(o.MDXTag,{name:"h2",components:a},"Deploy"),s.a.createElement(o.MDXTag,{name:"pre",components:a},s.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"hljs language-shell",metaString:""}},s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"hljs-meta"}},"$"),s.a.createElement(o.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"bash"}}," up"))))}},423:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.withMDXComponents=void 0;var t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s=p(n(1)),o=p(n(426)),r=p(n(157));function p(e){return e&&e.__esModule?e:{default:e}}var m=(0,o.default)({}),c=m.Provider,l=m.Consumer;a.withMDXComponents=function(e){return function(a){var n=a.components,o=function(e,a){var n={};for(var t in e)a.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n}(a,["components"]);return s.default.createElement(l,null,function(a){return s.default.createElement(e,t({components:n||a},o))})}};var i=function(e){var a=e.components,n=e.children;return s.default.createElement(c,{value:a},n)};i.propTypes={components:r.default.object.isRequired,children:r.default.element.isRequired},a.default=i},424:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(425);Object.defineProperty(a,"MDXTag",{enumerable:!0,get:function(){return o(t).default}});var s=n(423);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"MDXProvider",{enumerable:!0,get:function(){return o(s).default}})},425:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s=function(){function e(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(a,n,t){return n&&e(a.prototype,n),t&&e(a,t),a}}(),o=n(1),r=c(o),p=c(n(263)),m=n(423);function c(e){return e&&e.__esModule?e:{default:e}}var l={inlineCode:"code",wrapper:"div"},i=function(e){function a(){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,o.Component),s(a,[{key:"render",value:function(){var e=this.props,a=e.name,n=e.parentName,s=e.props,o=void 0===s?{}:s,m=e.children,c=e.components,i=void 0===c?{}:c,d=e.Layout,g=e.layoutProps,u=i[n+"."+a]||i[a]||l[a]||a;return d?((0,p.default)(this,d),r.default.createElement(d,t({components:i},g),r.default.createElement(u,o,m))):r.default.createElement(u,o,m)}}]),a}();a.default=(0,m.withMDXComponents)(i)},426:function(e,a,n){"use strict";a.__esModule=!0;var t=o(n(1)),s=o(n(427));function o(e){return e&&e.__esModule?e:{default:e}}a.default=t.default.createContext||s.default,e.exports=a.default},427:function(e,a,n){"use strict";a.__esModule=!0;var t=n(1),s=(r(t),r(n(157))),o=r(n(428));r(n(429));function r(e){return e&&e.__esModule?e:{default:e}}function p(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function m(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function c(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}var l=1073741823;a.default=function(e,a){var n,r,i="__create-react-context-"+(0,o.default)()+"__",d=function(e){function n(){var a,t,s,o;p(this,n);for(var r=arguments.length,c=Array(r),l=0;l<r;l++)c[l]=arguments[l];return a=t=m(this,e.call.apply(e,[this].concat(c))),t.emitter=(s=t.props.value,o=[],{on:function(e){o.push(e)},off:function(e){o=o.filter(function(a){return a!==e})},get:function(){return s},set:function(e,a){s=e,o.forEach(function(e){return e(s,a)})}}),m(t,a)}return c(n,e),n.prototype.getChildContext=function(){var e;return(e={})[i]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,t=e.value,s=void 0;((o=n)===(r=t)?0!==o||1/o==1/r:o!=o&&r!=r)?s=0:(s="function"==typeof a?a(n,t):l,0!=(s|=0)&&this.emitter.set(e.value,s))}var o,r},n.prototype.render=function(){return this.props.children},n}(t.Component);d.childContextTypes=((n={})[i]=s.default.object.isRequired,n);var g=function(a){function n(){var e,t;p(this,n);for(var s=arguments.length,o=Array(s),r=0;r<s;r++)o[r]=arguments[r];return e=t=m(this,a.call.apply(a,[this].concat(o))),t.state={value:t.getValue()},t.onUpdate=function(e,a){0!=((0|t.observedBits)&a)&&t.setState({value:t.getValue()})},m(t,e)}return c(n,a),n.prototype.componentWillReceiveProps=function(e){var a=e.observedBits;this.observedBits=void 0===a||null===a?l:a},n.prototype.componentDidMount=function(){this.context[i]&&this.context[i].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?l:e},n.prototype.componentWillUnmount=function(){this.context[i]&&this.context[i].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[i]?this.context[i].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(t.Component);return g.contextTypes=((r={})[i]=s.default.object,r),{Provider:d,Consumer:g}},e.exports=a.default},428:function(e,a,n){"use strict";(function(a){var n="__global_unique_id__";e.exports=function(){return a[n]=(a[n]||0)+1}}).call(a,n(261))},429:function(e,a,n){"use strict";var t=n(262);e.exports=t}})});