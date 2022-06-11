import React, { memo } from "react";
import { PropTypes } from "../../../../node_modules/@material-ui/core/index";
import { getValue } from "../../../../node_modules/@testing-library/user-event/dist/utils/index";
import Grid from "../../../components/Grid";
import Skeleton from "../../../components/Skeleton";
import Card from "./Card";

function Board({data}) {
  const { cases, todayDaths, recovered, deaths, todayCases } = data
  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayCases)} label="Casos de hoje" color="#f8e007" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label="Total de óbitos" color="#000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayDaths)} label="Óbitos de hoje" color="#f06969" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#04e710" />
      </Grid>
    </Grid>
  )
}
export default Board