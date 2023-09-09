import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { StockFundamentalController } from "../stockFundamental.controller";
import { StockFundamentalService } from "../stockFundamental.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  c5y: 42.42,
  cotacao: 42.42,
  createdAt: new Date(),
  divbpatr: 42.42,
  dy: 42.42,
  evebit: 42.42,
  evebitda: 42.42,
  id: 42,
  liq2m: 42.42,
  liqc: 42.42,
  mrgebit: 42.42,
  mrgliq: 42.42,
  pa: 42.42,
  pacl: 42.42,
  papel: "examplePapel",
  patrliq: 42.42,
  pcg: 42.42,
  pebit: 42.42,
  pl: 42.42,
  psr: 42.42,
  pvp: 42.42,
  roe: 42.42,
  roic: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  c5y: 42.42,
  cotacao: 42.42,
  createdAt: new Date(),
  divbpatr: 42.42,
  dy: 42.42,
  evebit: 42.42,
  evebitda: 42.42,
  id: 42,
  liq2m: 42.42,
  liqc: 42.42,
  mrgebit: 42.42,
  mrgliq: 42.42,
  pa: 42.42,
  pacl: 42.42,
  papel: "examplePapel",
  patrliq: 42.42,
  pcg: 42.42,
  pebit: 42.42,
  pl: 42.42,
  psr: 42.42,
  pvp: 42.42,
  roe: 42.42,
  roic: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    c5y: 42.42,
    cotacao: 42.42,
    createdAt: new Date(),
    divbpatr: 42.42,
    dy: 42.42,
    evebit: 42.42,
    evebitda: 42.42,
    id: 42,
    liq2m: 42.42,
    liqc: 42.42,
    mrgebit: 42.42,
    mrgliq: 42.42,
    pa: 42.42,
    pacl: 42.42,
    papel: "examplePapel",
    patrliq: 42.42,
    pcg: 42.42,
    pebit: 42.42,
    pl: 42.42,
    psr: 42.42,
    pvp: 42.42,
    roe: 42.42,
    roic: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  c5y: 42.42,
  cotacao: 42.42,
  createdAt: new Date(),
  divbpatr: 42.42,
  dy: 42.42,
  evebit: 42.42,
  evebitda: 42.42,
  id: 42,
  liq2m: 42.42,
  liqc: 42.42,
  mrgebit: 42.42,
  mrgliq: 42.42,
  pa: 42.42,
  pacl: 42.42,
  papel: "examplePapel",
  patrliq: 42.42,
  pcg: 42.42,
  pebit: 42.42,
  pl: 42.42,
  psr: 42.42,
  pvp: 42.42,
  roe: 42.42,
  roic: 42.42,
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("StockFundamental", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StockFundamentalService,
          useValue: service,
        },
      ],
      controllers: [StockFundamentalController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /stockFundamentals", async () => {
    await request(app.getHttpServer())
      .post("/stockFundamentals")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /stockFundamentals", async () => {
    await request(app.getHttpServer())
      .get("/stockFundamentals")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /stockFundamentals/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/stockFundamentals"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /stockFundamentals/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/stockFundamentals"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /stockFundamentals existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/stockFundamentals")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/stockFundamentals")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
