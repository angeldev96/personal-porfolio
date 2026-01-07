import { Resolver, Query } from "type-graphql";
import { Me } from "./type-defs";
import { getResumeData } from "../data/resume-data";
import { DEFAULT_LOCALE } from "../i18n/config";

@Resolver(() => Me)
export class MeResolver {
  @Query(() => Me)
  me(): Me {
    return getResumeData(DEFAULT_LOCALE) as any;
  }
}
