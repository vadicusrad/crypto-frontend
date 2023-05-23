import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { getFavoriteAssets } from '../../store/thunks/assets';
import { Box, Grid } from '@mui/material';
import { useStyles } from './styles';
import AreaChart from '../../components/charts/area-chart';

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
    const currentPrice = element.data.prices[0];
    const currentCap = element.data.market_caps[0];
    return (
      <Grid item lg={6} sm={6} xs={12} key={element.name}>
        <Grid container className={classes.topCardItem}>
          <Grid item xs={12} sm={6} lg={6}>
            <h3 className={classes.assetName}>{element.name}</h3>
            <div className={classes.itemDetails}>
              <h3 className={classes.cardPrice}>
                ${currentPrice[1].toFixed(4)}
              </h3>
              <p>${currentCap[1].toFixed(0)}</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} lg={6}>
            <AreaChart data={element.data.prices} />
          </Grid>
        </Grid>
      </Grid>
    );
  });

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        {renderFavoriteBlock}
      </Grid>
    </Box>
  );
};

export default Home;
