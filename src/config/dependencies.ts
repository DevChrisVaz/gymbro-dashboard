import { container } from "tsyringe";
import { ApiRestClient } from "@/core/data/contracts/datasources/api-rest-client";
import { AxiosApiRestClient } from "@/core/data/frameworks/datasources/rest/axios/axios-implementation";
import axiosInstance from "@/core/data/frameworks/datasources/rest/axios/axios.config";
import publicAxiosInstance from "@/core/data/frameworks/datasources/rest/axios/public-axios.config";
import { Axios } from "axios";

container.register<Axios>("Axios", {
    useValue: publicAxiosInstance
});

container.register<ApiRestClient>("PublicApiRestClient", {
    useClass: AxiosApiRestClient
});

container.register<Axios>("Axios", {
    useValue: axiosInstance
});

container.register<ApiRestClient>("ApiRestClient", {
    useClass: AxiosApiRestClient
});

export default container;