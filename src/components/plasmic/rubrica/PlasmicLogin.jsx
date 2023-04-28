// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hDnb1e9HU6FSLTm6gTNrXy
// Component: 3S3ZyIsQNW
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/registerForm"; // plasmic-import: TgJFzUZpvQ/codeComponent
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput"; // plasmic-import: Vf5hntD2SZ5/codeComponent
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput"; // plasmic-import: Vf5hntD2SZ5/codeComponentHelper
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_rubrica.module.css"; // plasmic-import: hDnb1e9HU6FSLTm6gTNrXy/projectcss
import sty from "./PlasmicLogin.module.css"; // plasmic-import: 3S3ZyIsQNW/css
import animalpng7EcAyfUUc from "./images/animalpng.png"; // plasmic-import: 7ecAyfUUc/picture

export const PlasmicLogin__VariantProps = new Array();

export const PlasmicLogin__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicLogin__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "user.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "password.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "Some password"
      },
      {
        path: "password.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "Some password"
      },
      {
        path: "password.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "Some password"
      },
      {
        path: "password.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "Some password"
      }
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__iFAeZ)}>
            <FormWrapper
              data-plasmic-name={"form"}
              data-plasmic-override={overrides.form}
              className={classNames("__wab_instance", sty.form)}
              extendedOnValuesChange={p.generateStateOnChangeProp($state, [
                "form",
                "value"
              ])}
              labelCol={{ span: 8, horizontalOnly: true }}
              layout={"vertical"}
              wrapperCol={{ span: 16, horizontalOnly: true }}
            >
              <div className={classNames(projectcss.all, sty.freeBox__m8Fp)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__mKwOf
                  )}
                >
                  <React.Fragment>
                    <React.Fragment>{""}</React.Fragment>
                    {
                      <h3
                        data-plasmic-name={"h3"}
                        data-plasmic-override={overrides.h3}
                        className={classNames(
                          projectcss.all,
                          projectcss.h3,
                          projectcss.__wab_text,
                          sty.h3
                        )}
                      >
                        {"Accedi alla rubrica"}
                      </h3>
                    }

                    <React.Fragment>{""}</React.Fragment>
                  </React.Fragment>
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox___89Ok4)}>
                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__eo7S
                  )}
                  href={`/home`}
                >
                  <p.PlasmicImg
                    data-plasmic-name={"img"}
                    data-plasmic-override={overrides.img}
                    alt={""}
                    className={classNames(sty.img)}
                    displayHeight={"114px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"93px"}
                    loading={"lazy"}
                    src={{
                      src: animalpng7EcAyfUUc,
                      fullWidth: 512,
                      fullHeight: 512,
                      aspectRatio: undefined
                    }}
                  />
                </a>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__fWxe)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ymX2G
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#FFFFFF" }}
                    >
                      {""}
                    </span>
                    <React.Fragment>{"\n"}</React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#FFFFFF" }}
                    >
                      {"Inserisci la mail o il numero di cellulare:"}
                    </span>
                  </React.Fragment>
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox___7UCze)}>
                {(() => {
                  const child$Props = {
                    className: classNames("__wab_instance", sty.user),
                    onChange: p.generateStateOnChangePropForCodeComponents(
                      $state,
                      "value",
                      ["user", "value"],
                      AntdInput_Helpers
                    ),

                    value: p.generateStateValueProp($state, ["user", "value"])
                  };
                  p.initializeCodeComponentStates(
                    $state,
                    [
                      {
                        name: "value",
                        plasmicStateName: "user.value"
                      }
                    ],

                    [],
                    AntdInput_Helpers ?? {},
                    child$Props
                  );

                  return (
                    <AntdInput
                      data-plasmic-name={"user"}
                      data-plasmic-override={overrides.user}
                      {...child$Props}
                    />
                  );
                })()}
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__gU0F)}>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__z0K3A
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#FFFFFF" }}
                    >
                      {"Inserisci la password:"}
                    </span>
                  </React.Fragment>
                </div>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox___0FlyK)}>
                <input
                  data-plasmic-name={"password"}
                  data-plasmic-override={overrides.password}
                  className={classNames(
                    projectcss.all,
                    projectcss.input,
                    sty.password
                  )}
                  onChange={e => {
                    p.generateStateOnChangeProp($state, ["password", "value"])(
                      e.target.value
                    );
                  }}
                  ref={ref => {
                    $refs["password"] = ref;
                  }}
                  size={1}
                  type={"password"}
                  value={p.generateStateValueProp($state, [
                    "password",
                    "value"
                  ])}
                />

                <div className={classNames(projectcss.all, sty.freeBox__e9GNx)}>
                  <button
                    data-plasmic-name={"avanti"}
                    data-plasmic-override={overrides.avanti}
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      sty.avanti
                    )}
                    disabled={false}
                    ref={ref => {
                      $refs["avanti"] = ref;
                    }}
                  >
                    <a
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__jho8
                      )}
                      href={`/contatti`}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__p2HdI
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__w1Kbf
                          )}
                        >
                          {"Avanti"}
                        </div>
                      </div>
                    </a>
                  </button>
                </div>
              </div>
            </FormWrapper>
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__ig1Rx)} />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "form", "h3", "img", "user", "password", "avanti"],
  form: ["form", "h3", "img", "user", "password", "avanti"],
  h3: ["h3"],
  img: ["img"],
  user: ["user"],
  password: ["password"],
  avanti: ["avanti"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLogin__ArgProps,
          internalVariantPropNames: PlasmicLogin__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLogin__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogin";
  } else {
    func.displayName = `PlasmicLogin.${nodeName}`;
  }
  return func;
}

export const PlasmicLogin = Object.assign(
  // Top-level PlasmicLogin renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    form: makeNodeComponent("form"),
    h3: makeNodeComponent("h3"),
    img: makeNodeComponent("img"),
    user: makeNodeComponent("user"),
    password: makeNodeComponent("password"),
    avanti: makeNodeComponent("avanti"),
    // Metadata about props expected for PlasmicLogin
    internalVariantProps: PlasmicLogin__VariantProps,
    internalArgProps: PlasmicLogin__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicLogin;
/* prettier-ignore-end */
