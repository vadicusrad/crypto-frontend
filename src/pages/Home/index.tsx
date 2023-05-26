import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { getFavoriteAssets, getTopPriceData } from '../../store/thunks/assets';
import { Box, Grid } from '@mui/material';
import { useStyles } from './styles';
import AreaChart from '../../components/Charts/Area-chart';
import TrendUpIcon from '../../assets/images/chart/trend-up.svg';
import TrendDownIcon from '../../assets/images/chart/trend-down.svg';
import LineChart from '../../components/Charts/Line-chart';
import { IChartData, ISingleAsset } from '../../common/types/assets';
import TopPrice from '../../components/TopPrice';
const Home: FC = (): JSX.Element => {
  const favoriteAssets: IChartData[] = useAppSelector(
    (state) => state.assets.favoriteAssets
  );

  const assetsArray: any = useAppSelector((state) => state.assets.assets);

  console.log('assetsArray ', assetsArray);

  const dispatch = useAppDispatch();
  const fetchDataRef = useRef(false);
  const classes = useStyles();

  const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], []);
  // Фильтруем массив удаляя одинаковые элементы. Так при переходе на страницы не будет лишних одинаковых графиков.
  const filteredArray = useMemo(() => {
    return favoriteAssets.filter(
      (value: any, index: number, self: any[]) =>
        index === self.findIndex((t) => t.name === value.name)
    );
  }, [favoriteAssets]);

  const fiteredAssetArray = assetsArray
    .slice()
    .sort((a: any, b: any) => b.current_price - a.current_price);

  const fetchData = useCallback(
    (data: string[]) => {
      data.forEach((asset: string) => {
        dispatch(getFavoriteAssets(asset));
      });
    },
    [dispatch]
  );

  useEffect(() => {
    if (fetchDataRef.current) return;
    fetchDataRef.current = true;
    fetchData(favoriteAssetName);
    dispatch(getTopPriceData());
  }, [favoriteAssetName, fetchData, dispatch]);

  const renderFavoriteBlock = filteredArray.map((element: IChartData) => {
    let currentPrice = 0;
    let changePrice = 0;

    element.singleAsset.forEach((element: ISingleAsset) => {
      currentPrice = element.current_price;
      changePrice = element.price_change_percentage_24h;
    });

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
      <Grid container className={classes.topPriceRoot}>
        <Grid item xs={12} sm={12} lg={12}>
          {fiteredAssetArray.length && (
            <TopPrice assets={fiteredAssetArray.slice(0, 6)} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
