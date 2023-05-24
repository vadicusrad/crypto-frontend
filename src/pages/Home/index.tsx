import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { getFavoriteAssets } from '../../store/thunks/assets';
import { Box, Grid } from '@mui/material';
import { useStyles } from './styles';
import AreaChart from '../../components/charts/area-chart';
import TrendUpIcon from '../../assets/images/chart/trend-up.svg';
import TrendDownIcon from '../../assets/images/chart/trend-down.svg';
import LineChart from '../../components/charts/line-chart';
const Home: FC = (): JSX.Element => {
  const favoriteAssets = useAppSelector((state) => state.assets.favoriteAssets);
  const dispatch = useAppDispatch();
  const fetchDataRef = useRef(false);
  const classes = useStyles();
  console.log('favoriteAssets ', favoriteAssets);

  const fetchData = useCallback(
    async (data: string[]) => {
      data.forEach((asset: string) => {
        dispatch(getFavoriteAssets(asset));
      });
    },
    [dispatch]
  );

  const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], []);
  // Фильтруем массив удаляя одинаковые элементы. Так при переходе на страницы не будет лишних одинаковых графиков.
  const filteredArray = favoriteAssets.filter(
    (value: any, index: number, self: any[]) =>
      index === self.findIndex((t) => t.name === value.name)
  );

  useEffect(() => {
    if (fetchDataRef.current) return;
    fetchDataRef.current = true;
    fetchData(favoriteAssetName);
  }, [favoriteAssetName, fetchData]);

  const renderFavoriteBlock = filteredArray.map((element: any) => {
    const currentPrice = element.singleAsset.map(
      (element: any) => element.current_price
    );
    const currentCap = element.singleAsset.map(
      (element: any) => element.market_cap
    );

    const changePrice = element.singleAsset.map(
      (element: any) => element.price_change_percentage_24h
    );
    return (
      <Grid item lg={6} sm={6} xs={12} key={element.name}>
        <Grid container className={classes.topCardItem}>
          <Grid item xs={12} sm={6} lg={6}>
            <h3 className={classes.assetName}>{element.name}</h3>
            <div className={classes.itemDetails}>
              <h3 className={classes.cardPrice}>${currentPrice}</h3>
              <Box
                className={
                  changePrice > 0
                    ? `${classes.priceTrend} ${classes.trendUp}`
                    : `${classes.priceTrend} ${classes.trendDown}`
                }
              >
                {changePrice > 0 ? (
                  <img src={TrendUpIcon} alt='TrendUp' />
                ) : (
                  <img src={TrendDownIcon} alt='TrendDown' />
                )}
                <span>{Number(changePrice).toFixed(2)}%</span>
              </Box>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <AreaChart data={element.price_chart_data} />
          </Grid>
        </Grid>
      </Grid>
    );
  });

  return (
    <Box className={classes.root}>
      <Grid container spacing={2} className={classes.areaChart}>
        {renderFavoriteBlock}
      </Grid>
      <Grid container className={classes.lineChartBlock}>
        <Grid item xs={12} sm={12} lg={12}>
          {filteredArray.length && <LineChart data={filteredArray} />}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
