import React, { Suspense, lazy } from "react";
import {
  withRouter,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
/* loader component for Suspense*/
import PageLoader from "./components/Common/PageLoader";

import Base from "./components/Layout/Base";

const waitFor = (Tag: React.LazyExoticComponent<any>) => (props: any) =>
  <Tag {...props} />;

const Welcome = lazy(() => import("./components/Welcome/Welcome"));
const Buttons = lazy(() => import("./components/Elements/Buttons"));
const Cards = lazy(() => import("./components/Elements/Cards"));
const TableStandard = lazy(() => import("./components/Tables/TableStandard"));
const FormStandard = lazy(() => import("./components/Forms/FormStandard"));
const DataList = lazy(() => import("./Features/DataList/index"));

const Routes = ({ location }: RouteProps) => {
  const currentKey = location!.pathname.split("/")[1] || "/";
  const timeout = { enter: 500, exit: 500 };

  const animationName = "rag-fadeIn";

  return (
    <Base>
      <TransitionGroup>
        <CSSTransition
          key={currentKey}
          timeout={timeout}
          classNames={animationName}
          exit={false}
        >
          <div>
            <Suspense fallback={<PageLoader />}>
              <Switch location={location}>
                <Route path="/welcome" component={waitFor(Welcome)} />
                <Route path="/buttons" component={waitFor(Buttons)} />
                <Route path="/cards" component={waitFor(Cards)} />
                <Route
                  path="/table-standard"
                  component={waitFor(TableStandard)}
                />
                <Route
                  path="/form-standard"
                  component={waitFor(FormStandard)}
                />
                {/* {/* <Route path="/users" component={waitFor(Users)} /> */}
                <Route path="/data-list" component={waitFor(DataList)} />

                <Redirect to="/welcome" />
              </Switch>
            </Suspense>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Base>
  );
  // }
};

export default withRouter(Routes);
