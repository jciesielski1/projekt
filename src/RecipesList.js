/* eslint-disable react/jsx-key */
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)`
  height: 100%;
`;

export const RecipesList = ({ recipes }) => {
  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={3}
      padding={{ xs: 0, md: 2, lg: 3 }}
    >
      {recipes.map((recipe, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <StyledCard>
            <CardMedia
              sx={{ height: 180 }}
              image={recipe.recipe.image}
              title={recipe.recipe.label}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {recipe.recipe.label}
              </Typography>

              <Typography gutterBottom variant="h6" component="div">
                Nutritional Information (per 100 grams):
              </Typography>

              <Typography
                gutterBottom
                variant="body2"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {(
                  recipe.recipe.calories /
                  (recipe.recipe.totalWeight / 100)
                ).toFixed(1)}{" "}
                Calories
              </Typography>
              {recipe.recipe.totalNutrients && (
                <>
                  <Typography variant="body2" component="div">
                    Fat:{" "}
                    {(
                      recipe.recipe.totalNutrients.FAT?.quantity /
                      (recipe.recipe.totalWeight / 100)
                    ).toFixed(1)}{" "}
                    {recipe.recipe.totalNutrients.FAT?.unit}
                  </Typography>
                  <Typography variant="body2" component="div">
                    Carbs:{" "}
                    {(
                      recipe.recipe.totalNutrients.CHOCDF?.quantity /
                      (recipe.recipe.totalWeight / 100)
                    ).toFixed(1)}{" "}
                    {recipe.recipe.totalNutrients.CHOCDF?.unit}
                  </Typography>
                  <Typography variant="body2" component="div">
                    Protein:{" "}
                    {(
                      recipe.recipe.totalNutrients.PROCNT?.quantity /
                      (recipe.recipe.totalWeight / 100)
                    ).toFixed(1)}{" "}
                    {recipe.recipe.totalNutrients.PROCNT?.unit}
                  </Typography>
                </>
              )}
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};
